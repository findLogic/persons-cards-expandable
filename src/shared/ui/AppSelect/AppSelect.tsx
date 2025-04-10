import { customStyles } from '@/shared/lib/customStyleSelectReact'
import Select from 'react-select'

interface OptionType {
  value: string
  label: string
}

interface AppSelectProps {
  label: string
  options: OptionType[]
  disabled?: boolean
  placeeholder?: string
  value: OptionType | null
  onChange: (value: OptionType | null) => void
}

export const AppSelect = ({
  options,
  value,
  placeeholder,
  disabled,
  onChange,
  ...rest
}: AppSelectProps) => {
  const handleChange = (selectedOption: OptionType | null) => {
    onChange(selectedOption)
  }
  return (
    <div className="filter-panel__field">
      <label htmlFor={'select'} className="filter-panel__label">
        Компания
      </label>
      <Select<OptionType>
        isDisabled={disabled}
        id={'select'}
        options={options}
        value={value}
        onChange={handleChange}
        placeholder={placeeholder}
        isClearable
        noOptionsMessage={() => 'Нет доступных вариантов'}
        classNamePrefix="react-select"
        styles={customStyles}
        {...rest}
      />
    </div>
  )
}
