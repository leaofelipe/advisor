import React from 'react'
import { Text } from '@radix-ui/themes'
import styles from './BudgetSetItem.module.css'

const BudgetSetItem = React.forwardRef(function BudgetSetItem(
  { label, value, onClick, className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    >
      <Text as="p" size="2" className={styles.label}>
        {label}
      </Text>
      <Text as="p" size="3" weight="bold" className={styles.value}>
        {value}
      </Text>
    </button>
  )
})

BudgetSetItem.displayName = 'BudgetSetItem'

export default BudgetSetItem
