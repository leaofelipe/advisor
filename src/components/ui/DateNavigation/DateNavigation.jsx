import { useMemo } from 'react'
import Select from '@/components/ui/Select/Select'
import styles from './DateNavigation.module.css'

const MONTHS = [
  { text: 'janeiro', value: '01' },
  { text: 'fevereiro', value: '02' },
  { text: 'março', value: '03' },
  { text: 'abril', value: '04' },
  { text: 'maio', value: '05' },
  { text: 'junho', value: '06' },
  { text: 'julho', value: '07' },
  { text: 'agosto', value: '08' },
  { text: 'setembro', value: '09' },
  { text: 'outubro', value: '10' },
  { text: 'novembro', value: '11' },
  { text: 'dezembro', value: '12' }
]

function getYearOptions(referenceYear) {
  return Array.from({ length: 6 }, (_, i) => {
    const year = String(referenceYear - 2 + i)
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

  const isMonthControlled = month !== undefined
  const isYearControlled = year !== undefined

  const yearOptions = useMemo(() => {
    const referenceYear = isYearControlled
      ? parseInt(year, 10)
      : parseInt(defaultYear ?? fallbackYear, 10)
    return getYearOptions(referenceYear)
  }, [isYearControlled, year, defaultYear, fallbackYear])

  return (
    <div className={styles.root}>
      <Select
        options={MONTHS}
        {...(isMonthControlled
          ? { value: month, onValueChange: onMonthChange }
          : {
              defaultValue: defaultMonth ?? fallbackMonth,
              onValueChange: onMonthChange
            })}
      />
      |
      <Select
        options={yearOptions}
        {...(isYearControlled
          ? { value: year, onValueChange: onYearChange }
          : {
              defaultValue: defaultYear ?? fallbackYear,
              onValueChange: onYearChange
            })}
      />
    </div>
  )
}

export default DateNavigation
