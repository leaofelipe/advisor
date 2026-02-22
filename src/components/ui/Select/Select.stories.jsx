import Select from './Select'

const months = [
  { text: 'January', value: '01' },
  { text: 'February', value: '02' },
  { text: 'March', value: '03' },
  { text: 'April', value: '04' },
  { text: 'May', value: '05' },
  { text: 'June', value: '06' },
  { text: 'July', value: '07' },
  { text: 'August', value: '08' },
  { text: 'September', value: '09' },
  { text: 'October', value: '10' },
  { text: 'November', value: '11' },
  { text: 'December', value: '12' }
]

const years = Array.from({ length: 10 }, (_, i) => {
  const year = String(2020 + i)
  return { text: year, value: year }
})

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    bordered: { control: 'boolean' },
    showIcon: { control: 'boolean' }
  }
}

export const Default = {
  args: {
    options: months,
    defaultValue: '01',
    placeholder: 'Select month'
  }
}

export const WithYears = {
  args: {
    options: years,
    defaultValue: '2025',
    placeholder: 'Select year'
  }
}

export const WithPlaceholder = {
  args: {
    options: months,
    placeholder: 'Select month'
  }
}

export const WithBorder = {
  args: {
    options: months,
    defaultValue: '01',
    bordered: true
  }
}

export const WithIcon = {
  args: {
    options: months,
    defaultValue: '01',
    showIcon: true
  }
}

export const WithIconAndBorder = {
  args: {
    options: months,
    defaultValue: '01',
    showIcon: true,
    bordered: true
  }
}

export const Disabled = {
  args: {
    options: months,
    defaultValue: '01',
    disabled: true
  }
}
