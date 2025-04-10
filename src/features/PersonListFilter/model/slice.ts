import { OptionType } from '@/shared/types/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FiltersState {
  searchTerm: string
  selectedCities: OptionType[]
  selectedCompany: OptionType | null
}

const initialState: FiltersState = {
  searchTerm: '',
  selectedCities: [],
  selectedCompany: null,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload
    },
    toggleCity(state, action: PayloadAction<OptionType>) {
      const city = action.payload
      const exists = state.selectedCities.some((c) => c.value === city.value)
      if (exists) {
        state.selectedCities = state.selectedCities.filter((c) => c.value !== city.value)
      } else {
        state.selectedCities.push(city)
      }
    },
    setSelectedCities(state, action: PayloadAction<OptionType[]>) {
      state.selectedCities = action.payload
    },
    setCompany(state, action: PayloadAction<{ value: string; label: string } | null>) {
      state.selectedCompany = action.payload
    },
    resetFilters(state) {
      state.searchTerm = ''
      state.selectedCities = []
      state.selectedCompany = null
    },
  },
})

export const {
  actions: { setSearchTerm, toggleCity, setSelectedCities, setCompany, resetFilters },
  reducer: filtersReducer,
} = filtersSlice
