import cls from './AppSearchField.module.scss'

interface SearchFieldProps {
  label: string
  value: string
  placeholder?: string
  disabled?: boolean
  onChange: (value: string) => void
}

export const AppSearchField = ({
  label,
  value,
  placeholder,
  disabled,
  onChange,
  ...rest
}: SearchFieldProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="filter-panel__field">
      <label htmlFor="search" className="filter-panel__label">
        {label}
      </label>
      <input
        disabled={disabled}
        id="search"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleSearchChange}
        className={cls.input}
        {...rest}
      />
    </div>
  )
}
