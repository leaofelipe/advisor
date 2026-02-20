import { Button as BaseButton } from '@base-ui/react/button'
import styles from './Button.module.css'

export default function Button({
  children,
  variant = 'contained',
  size = 'medium',
  disabled = false,
  href,
  onClick,
  ...props
}) {
  const render = href ? <a href={href} /> : undefined

  return (
    <BaseButton
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
      render={render}
      {...props}
    >
      {children}
    </BaseButton>
  )
}
