import React from 'react'
import { Flex } from '@radix-ui/themes'
import BudgetSetItem from '@/components/ui/BudgetSetItem/BudgetSetItem'
import styles from './BudgetSet.module.css'

const BudgetSet = React.forwardRef(function BudgetSet(
  { items = [], onItemClick, className, ...props },
  ref
) {
  return (
    <Flex
      ref={ref}
      justify="center"
      align="start"
      wrap="wrap"
      gap="8"
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    >
      {items.map((item, index) => (
        <BudgetSetItem
          key={item.label}
          label={item.label}
          value={item.value}
          onClick={onItemClick ? () => onItemClick(item, index) : undefined}
        />
      ))}
    </Flex>
  )
})

BudgetSet.displayName = 'BudgetSet'

export default BudgetSet
