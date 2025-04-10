import { customStyles } from '@/shared/lib/customStyleSelectReact'
import { OptionType } from '@/shared/types/types'
import Select, { MultiValue } from 'react-select'

interface AppSelectMultiProps {
  label: string
  options: OptionType[]
  value: OptionType[]
  disabled?: boolean
  onChange: (selectedOptions: OptionType[]) => void
  placeholder?: string
}

export const AppSelectMulti = ({
  options,
  value,
  disabled,
  onChange,
  placeholder,
  ...rest
}: AppSelectMultiProps) => {
  const handleCityChange = (selectedOptions: MultiValue<OptionType>) => {
    onChange([...selectedOptions])
  }

  return (
    <div className="filter-panel__field">
      <label htmlFor={'multi'} className="filter-panel__label">
        Города
      </label>
      <Select<OptionType, true>
        isMulti
        isDisabled={disabled}
        id={'multi'}
        options={options}
        value={value}
        onChange={handleCityChange}
        placeholder={placeholder}
        noOptionsMessage={() => 'Нет доступных вариантов'}
        classNamePrefix="react-select"
        styles={{
          ...customStyles,
        }}
        {...rest}
      />
    </div>
  )
}
