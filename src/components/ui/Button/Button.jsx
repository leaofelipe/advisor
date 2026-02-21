import React from 'react'
import { Button as RadixButton } from '@radix-ui/themes'
import styles from './Button.module.css'

const Button = React.forwardRef(function Button(
  { variant = 'solid', className, ...props },
  ref
) {
  return (
    <RadixButton
      ref={ref}
      variant={variant}
      className={[styles.root, className].filter(Boolean).join(' ')}
      {...props}
    />
  )
})

Button.displayName = 'Button'

export default Button
