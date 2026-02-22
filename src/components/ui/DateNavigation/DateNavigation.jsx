import Select from '@/components/ui/Select/Select'
import styles from './DateNavigation.module.css'

const MONTHS = [
  { text: 'Janeiro', value: '01' },
  { text: 'Fevereiro', value: '02' },
  { text: 'Março', value: '03' },
  { text: 'Abril', value: '04' },
  { text: 'Maio', value: '05' },
  { text: 'Junho', value: '06' },
  { text: 'Julho', value: '07' },
  { text: 'Agosto', value: '08' },
  { text: 'Setembro', value: '09' },
  { text: 'Outubro', value: '10' },
  { text: 'Novembro', value: '11' },
  { text: 'Dezembro', value: '12' }
]

function getYearOptions() {
  const current = new Date().getFullYear()
  return Array.from({ length: 6 }, (_, i) => {
    const year = String(current - 2 + i)
    return { text: year, value: year }
  })
}

function DateNavigation({
  month,
  year,
  defaultMonth,
  defaultYear,
  onMonthChange,
  onYearChange
}) {
  const now = new Date()
  const fallbackMonth = String(now.getMonth() + 1).padStart(2, '0')
  const fallbackYear = String(now.getFullYear())

  return (
    <div className={styles.root}>
      <Select
        options={MONTHS}
        value={month}
        defaultValue={defaultMonth ?? fallbackMonth}
        onValueChange={onMonthChange}
      />
      |
      <Select
        options={getYearOptions()}
        value={year}
        defaultValue={defaultYear ?? fallbackYear}
        onValueChange={onYearChange}
      />
    </div>
  )
}

export default DateNavigation
