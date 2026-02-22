import React from 'react'
import { Text } from '@radix-ui/themes'
import styles from './ResumeItem.module.css'

const ResumeItem = React.forwardRef(function ResumeItem(
  { title, value, selected = false, onClick, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      className={[styles.root, selected && styles.selected, className]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
      onKeyDown={e => e.key === 'Enter' && onClick?.()}
      {...props}
    >
      <Text as="p" size="2" weight="bold" className={styles.title}>
        {title}
      </Text>
      <Text as="p" size="6" weight="bold" className={styles.value}>
        {value}
      </Text>
    </div>
  )
})

ResumeItem.displayName = 'ResumeItem'

export default ResumeItem
