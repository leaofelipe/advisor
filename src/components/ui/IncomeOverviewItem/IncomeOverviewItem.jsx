import React from 'react'
import { Text } from '@radix-ui/themes'
import styles from './IncomeOverviewItem.module.css'

const IncomeOverviewItem = React.forwardRef(function IncomeOverviewItem(
  { label, value, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    >
      <Text as="p" size="4" className={styles.label}>
        {label}
      </Text>
      <Text as="p" size="5" weight="bold" className={styles.value}>
        {value}
      </Text>
    </div>
  )
})

IncomeOverviewItem.displayName = 'IncomeOverviewItem'

export default IncomeOverviewItem
