interface SearchFieldProps {
  label: string
  value: string
  placeholder?: string
  onChange: (value: string) => void
}

export const AppSearchField = ({
  label,
  value,
  placeholder,
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
        id="search"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleSearchChange}
        className="filter-panel__search-input"
        {...rest}
      />
    </div>
  )
}
