import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore'
import DATA from '@/api/DATA.mock'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

class FirebaseService {
  static #instance = null

  #app
  #db
  #useMock

  constructor(useMock = false) {
    this.#app = initializeApp(firebaseConfig)
    this.#db = getFirestore(this.#app)
    this.#useMock = useMock
  }

  static getInstance(useMock = false) {
    if (!FirebaseService.#instance) {
      FirebaseService.#instance = new FirebaseService(useMock)
    }
    return FirebaseService.#instance
  }

  get db() {
    return this.#db
  }

  get app() {
    return this.#app
  }

  /**
   * Fetch all data for a given year
   * @param {number} year - Year (e.g., 2025)
   * @returns {Promise<Object>} Year data
   */
  async getYearData(year) {
    if (this.#useMock) {
      return DATA[year] || {}
    }

    try {
      const yearRef = doc(this.#db, 'budgets', year.toString())
      const yearSnap = await getDoc(yearRef)
      return yearSnap.exists() ? yearSnap.data() : {}
    } catch (error) {
      console.error(`Error fetching year ${year}:`, error)
      throw error
    }
  }

  /**
   * Fetch data for a specific month
   * @param {number} year - Year (e.g., 2025)
   * @param {string} month - Month (e.g., '03')
   * @returns {Promise<Object>} Month data
   */
  async getMonthData(year, month) {
    if (this.#useMock) {
      return DATA[year]?.[month] || null
    }

    try {
      const monthRef = doc(
        this.#db,
        'budgets',
        year.toString(),
        'months',
        month
      )
      const monthSnap = await getDoc(monthRef)
      return monthSnap.exists() ? monthSnap.data() : null
    } catch (error) {
      console.error(`Error fetching month ${month}/${year}:`, error)
      throw error
    }
  }

  /**
   * Update all data for a specific month
   * @param {number} year - Year (e.g., 2025)
   * @param {string} month - Month (e.g., '03')
   * @param {Object} data - Data to update
   * @returns {Promise<void>}
   */
  async updateMonth(year, month, data) {
    if (this.#useMock) {
      console.warn('Mock mode: data will not be persisted')
      if (DATA[year]?.[month]) {
        Object.assign(DATA[year][month], data)
      }
      return
    }

    try {
      const monthRef = doc(
        this.#db,
        'budgets',
        year.toString(),
        'months',
        month
      )

      const monthSnap = await getDoc(monthRef)

      if (monthSnap.exists()) {
        await updateDoc(monthRef, data)
      } else {
        await setDoc(monthRef, data)
      }
    } catch (error) {
      console.error(`Error updating month ${month}/${year}:`, error)
      throw error
    }
  }

  /**
   * Update a specific budget category for a month
   * @param {number} year - Year
   * @param {string} month - Month
   * @param {string} category - Category name (e.g., 'essencial')
   * @param {Object} categoryData - Category data
   * @returns {Promise<void>}
   */
  async updateCategory(year, month, category, categoryData) {
    if (this.#useMock) {
      console.warn('Mock mode: data will not be persisted')
      if (DATA[year]?.[month]?.budget) {
        DATA[year][month].budget[category] = categoryData
      }
      return
    }

    try {
      const monthRef = doc(
        this.#db,
        'budgets',
        year.toString(),
        'months',
        month
      )

      await updateDoc(monthRef, {
        [`budget.${category}`]: categoryData
      })
    } catch (error) {
      console.error(
        `Error updating category ${category} for month ${month}/${year}:`,
        error
      )
      throw error
    }
  }

  /**
   * Update current balance data for a month
   * @param {number} year - Year
   * @param {string} month - Month
   * @param {Object} currentData - Current balance data
   * @returns {Promise<void>}
   */
  async updateCurrent(year, month, currentData) {
    if (this.#useMock) {
      console.warn('Mock mode: data will not be persisted')
      if (DATA[year]?.[month]) {
        DATA[year][month].current = currentData
      }
      return
    }

    try {
      const monthRef = doc(
        this.#db,
        'budgets',
        year.toString(),
        'months',
        month
      )

      await updateDoc(monthRef, { current: currentData })
    } catch (error) {
      console.error(
        `Error updating current balance for month ${month}/${year}:`,
        error
      )
      throw error
    }
  }
}

export default FirebaseService.getInstance()
