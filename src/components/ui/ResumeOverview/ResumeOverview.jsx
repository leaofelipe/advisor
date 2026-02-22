import React from 'react'
import { Text } from '@radix-ui/themes'
import styles from './ResumeOverview.module.css'

const ResumeOverview = React.forwardRef(function ResumeOverview(
  { title, value, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    >
      <Text as="p" size="7" weight="regular" className={styles.title}>
        {title}
      </Text>
      <Text as="p" size="8" weight="bold" className={styles.value}>
        {value}
      </Text>
    </div>
  )
})

ResumeOverview.displayName = 'ResumeOverview'

export default ResumeOverview
