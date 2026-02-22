import { useState } from 'react'
import DateNavigation from './DateNavigation'

export default {
  title: 'Components/DateNavigation',
  component: DateNavigation,
  argTypes: {
    month: { control: 'text' },
    year: { control: 'text' },
    defaultMonth: { control: 'text' },
    defaultYear: { control: 'text' }
  }
}

export const Default = {}

export const Controlled = {
  render: () => {
    const now = new Date()
    const [month, setMonth] = useState(
      String(now.getMonth() + 1).padStart(2, '0')
    )
    const [year, setYear] = useState(String(now.getFullYear()))

    return (
      <DateNavigation
        month={month}
        year={year}
        onMonthChange={setMonth}
        onYearChange={setYear}
      />
    )
  }
}
