import styles from './TopBar.module.css'

export default function TopBar({ children, className }) {
  return (
    <header className={`${styles.topbar}${className ? ` ${className}` : ''}`}>
      {children}
    </header>
  )
}
