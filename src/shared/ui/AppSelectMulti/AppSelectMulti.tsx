import { OptionType } from '@/shared/types/types'
import Select, { MultiValue } from 'react-select'

interface AppSelectMultiProps {
  label: string
  options: OptionType[]
  value: OptionType[]
  onChange: (selectedOptions: OptionType[]) => void
  placeholder?: string
}

export const AppSelectMulti = ({
  options,
  value,
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
        id={'multi'}
        options={options}
        value={value}
        onChange={handleCityChange}
        placeholder={placeholder}
        noOptionsMessage={() => 'Нет доступных вариантов'}
        classNamePrefix="react-select"
        styles={{
          // menu: (provided) => ({
          //   ...provided,
          //   maxHeight: '100px',
          //   overflow: 'auto',
          // }),
          // menuList: (provided) => ({
          //   ...provided,
          //   maxHeight: '60px',
          //   padding: 0,
          // }),
          valueContainer: (provided) => ({
            ...provided,
            maxHeight: '75px',
            overflow: 'auto',
            flexWrap: 'nowrap',
          }),
          multiValue: (provided) => ({
            ...provided,
            maxWidth: '100%',
          }),
        }}
        {...rest}
      />
    </div>
  )
}
