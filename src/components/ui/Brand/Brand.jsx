import logo from '@/assets/images/logo.svg?raw'
import logoOnly from '@/assets/images/logo-only.svg?raw'
import styles from './Brand.module.css'

const LOGOS = {
  full: logo,
  only: logoOnly
}

const COLORS = {
  blue: 'var(--blue-12)',
  white: 'white'
}

export default function Brand({
  variant = 'full',
  color = 'blue',
  width,
  className
}) {
  const svg = LOGOS[variant] ?? LOGOS.full
  const colorValue = COLORS[color] ?? COLORS.blue

  return (
    <span
      className={`${styles.brand} ${className ?? ''}`.trim()}
      style={{ width, color: colorValue }}
      dangerouslySetInnerHTML={{ __html: svg }}
      role="img"
      aria-label="Brand logo"
    />
  )
}
