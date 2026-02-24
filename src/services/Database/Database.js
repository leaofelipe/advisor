import firebase from '@/services/Firebase/firebase'

class DatabaseService {
  static #instance = null

  static getInstance() {
    if (!DatabaseService.#instance) {
      DatabaseService.#instance = new DatabaseService()
    }
    return DatabaseService.#instance
  }

  async getCurrent(year, month) {
    const data = await firebase.getMonthData(year, month)
    return data?.current ?? null
  }

  async updateCurrent(year, month, data) {
    return firebase.updateCurrent(year, month, data)
  }

  #withComputedFields(budget) {
    const result = { plan: 0, spent: 0, balance: 0 }
    const enriched = {}

    for (const [key, item] of Object.entries(budget)) {
      const plan = item.plan ?? 0
      const spent = item.spent ?? 0
      const balance = plan - spent

      enriched[key] = { ...item, balance }

      result.plan += plan
      result.spent += spent
      result.balance += balance
    }

    return { ...enriched, result }
  }

  async getBudget(year, month) {
    const data = await firebase.getMonthData(year, month)
    const budget = data?.budget ?? null
    return budget ? this.#withComputedFields(budget) : null
  }

  async updateBudget(year, month, data) {
    return firebase.updateMonth(year, month, { budget: data })
  }
}

export default DatabaseService.getInstance()
