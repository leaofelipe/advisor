import { Box, Heading, Separator } from '@radix-ui/themes'
import IncomeOverview from '@/components/ui/IncomeOverview/IncomeOverview'
import BudgetSet from '@/components/ui/BudgetSet/BudgetSet'
import BudgetMargin from '@/components/ui/BudgetMargin/BudgetMargin'
import styles from './Planning.module.css'

const budgetItems = [
  { label: 'essencial', value: 'R$3.000' },
  { label: 'dívidas', value: 'R$3.000' },
  { label: 'reserva', value: 'R$3.000' },
  { label: 'investimentos', value: 'R$3.000' }
]

function Planning() {
  return (
    <main>
      <Box className={styles.overview}>
        <Heading as="h1" className={styles.heading}>
          Planejamento
        </Heading>
        <IncomeOverview
          previousBalance="R$430,00"
          income="R$13.400,00"
          creditCards="R$(13.400,00)"
        />
        <Separator size="4" color="gray" className={styles.separator} />
        <BudgetSet
          items={budgetItems}
          onItemClick={item => console.log(item)}
        />
        <Separator size="4" color="gray" className={styles.separator} />
        <BudgetMargin label="margem" value="R$9,00" />
      </Box>
    </main>
  )
}

export default Planning
