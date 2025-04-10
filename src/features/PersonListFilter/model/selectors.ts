import { StateSchema } from '@/app/providers/StoreProvider'

export const selectSearchTerm = (state: StateSchema) => state.filters.searchTerm
export const selectSelectedCities = (state: StateSchema) => state.filters.selectedCities
export const selectSelectedCompany = (state: StateSchema) => state.filters.selectedCompany
