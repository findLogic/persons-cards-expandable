import { StylesConfig } from 'react-select'
import { OptionType } from '../types/types'

export const customStyles: StylesConfig<OptionType, boolean> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'var(--bg-input, #2d3748)',
    borderColor: state.isFocused ? 'var(--primary-color, #4299e1)' : 'var(--border-color, #4a5568)',
    borderWidth: '2px',
    boxShadow: state.isFocused ? '0 0 0 1px var(--primary-color, #4299e1)' : 'none',
    minHeight: '44px',
    '&:hover': {
      borderColor: 'var(--primary-color-hover, #3182ce)',
    },
    color: 'var(--text-color, #e2e8f0)',
  }),
  input: (provided) => ({
    ...provided,
    color: 'var(--text-color, #e2e8f0)',
    caretColor: 'var(--primary-color, #4299e1)',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: 'var(--placeholder-color, #a0aec0)',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'var(--text-color, #e2e8f0)',
  }),
  valueContainer: (provided) => ({
    ...provided,
    maxHeight: '75px',
    overflow: 'auto',
    flexWrap: 'nowrap',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: 'var(--icon-color, #a0aec0)',
    padding: '8px',
    transition: 'transform 0.2s',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'none',
    '&:hover': {
      color: 'var(--icon-hover-color, #e2e8f0)',
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: 'var(--icon-color, #a0aec0)',
    padding: '8px',
    '&:hover': {
      color: 'var(--danger-color, #e53e3e)',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'var(--border-color, #4a5568)',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'var(--bg-dropdown, #2d3748)',
    border: '1px solid var(--border-color, #4a5568)',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)',
    borderRadius: '6px',
    overflow: 'hidden',
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '0',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? 'var(--primary-color, #4299e1)'
      : state.isFocused
        ? 'var(--bg-option-hover, #4a5568)'
        : 'transparent',
    color: state.isSelected ? 'var(--text-on-primary, white)' : 'var(--text-color, #e2e8f0)',
    padding: '12px 16px',
    cursor: 'pointer',
    '&:active': {
      backgroundColor: 'var(--primary-color-active, #2b6cb0)',
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: 'var(--bg-tag, #4a5568)',
    borderRadius: '4px',
  }),

  multiValueLabel: (provided) => ({
    ...provided,
    backgroundColor: 'var(--bg-option-hover, #4a5568)',
    color: 'var(--text-color, #e2e8f0)',
    padding: '4px 8px',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    backgroundColor: 'var(--bg-option-hover, #4a5568)',
    color: 'var(--icon-color, #a0aec0)',
    // borderRadius: '0 4px 4px 0',
    '&:hover': {
      backgroundColor: 'var(--danger-color, #e53e3e)',
      color: 'white',
    },
  }),
  noOptionsMessage: (provided) => ({
    ...provided,
    color: 'var(--text-secondary, #a0aec0)',
    padding: '16px',
  }),
  loadingMessage: (provided) => ({
    ...provided,
    color: 'var(--text-secondary, #a0aec0)',
    padding: '16px',
  }),
  groupHeading: (provided) => ({
    ...provided,
    color: 'var(--text-secondary, #a0aec0)',
    fontWeight: '600',
    fontSize: '0.85em',
    padding: '8px 16px',
    backgroundColor: 'var(--bg-group-heading, #1a202c)',
    margin: 0,
  }),
}
