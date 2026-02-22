import { Select as SelectPrimitive } from '@radix-ui/themes'
import styles from './Select.module.css'

function Select({
  options = [],
  value,
  defaultValue,
  onValueChange,
  placeholder,
  bordered = false,
  showIcon = false,
  className,
  disabled
}) {
  const isControlled = value !== undefined
  const rootProps = {
    disabled
  }

  if (isControlled) {
    rootProps.value = value
    rootProps.onValueChange = onValueChange
  } else {
    rootProps.defaultValue = defaultValue
    if (onValueChange) {
      rootProps.onValueChange = onValueChange
    }
  }

  return (
    <SelectPrimitive.Root {...rootProps}>
      <SelectPrimitive.Trigger
        placeholder={placeholder}
        className={[
          styles.trigger,
          bordered ? styles.bordered : styles.borderless,
          showIcon ? null : styles.noIcon,
          className
        ]
          .filter(Boolean)
          .join(' ')}
      />
      <SelectPrimitive.Content className={styles.content}>
        {options.map(({ text, value: optionValue }) => (
          <SelectPrimitive.Item
            key={optionValue}
            value={optionValue}
            className={styles.item}
          >
            {text}
          </SelectPrimitive.Item>
        ))}
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  )
}

export default Select
