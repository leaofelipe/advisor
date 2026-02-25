import React from 'react'
import { Flex } from '@radix-ui/themes'
import IncomeOverviewItem from '@/components/ui/IncomeOverviewItem/IncomeOverviewItem'
import styles from './IncomeOverview.module.css'

const IncomeOverview = React.forwardRef(function IncomeOverview(
  { previousBalance, income, creditCards, className, ...props },
  ref
) {
  return (
    <Flex
      ref={ref}
      justify="between"
      align="start"
      wrap="wrap"
      gap="4"
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    >
      <IncomeOverviewItem label="saldo anterior" value={previousBalance} />
      <IncomeOverviewItem label="entrada" value={income} />
      <IncomeOverviewItem label="cartões" value={creditCards} />
    </Flex>
  )
})

IncomeOverview.displayName = 'IncomeOverview'

export default IncomeOverview
