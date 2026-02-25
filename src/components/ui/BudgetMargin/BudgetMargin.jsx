import React from 'react'
import { Flex, Text } from '@radix-ui/themes'
import styles from './BudgetMargin.module.css'

const BudgetMargin = React.forwardRef(function BudgetMargin(
  { label, value, className, ...props },
  ref
) {
  return (
    <Flex
      ref={ref}
      direction="column"
      align="center"
      gap="1"
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    >
      <Text as="p" size="4" className={styles.label}>
        {label}
      </Text>
      <Text as="p" size="5" weight="bold" className={styles.value}>
        {value}
      </Text>
    </Flex>
  )
})

BudgetMargin.displayName = 'BudgetMargin'

export default BudgetMargin
