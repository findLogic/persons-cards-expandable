import { AppSearchField } from '@/shared/ui/AppSearchField'
import { AppSelect } from '@/shared/ui/AppSelect'
import { AppSelectMulti } from '@/shared/ui/AppSelectMulti'
import { useQuery } from '@tanstack/react-query'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchTerm, selectSelectedCities, selectSelectedCompany } from '../model/selectors'
import { setCompany, setSearchTerm, setSelectedCities } from '../model/slice'
import './PersonListFilter.scss'
import { getCities } from '@/shared/api/cities'
import { getCompanies } from '@/shared/api/companies'

interface PersonListFilterProps {
  disabled?: boolean
}

export const PersonListFilter = ({ disabled }: PersonListFilterProps) => {
  const { data: cityOptions = [] } = useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
  })
  const { data: companyOptions = [] } = useQuery({
    queryKey: ['companies'],
    queryFn: getCompanies,
  })

  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchTerm)
  const selectedCities = useSelector(selectSelectedCities)
  const selectedCompany = useSelector(selectSelectedCompany)

  return (
    <div className="filter-panel">
      <AppSearchField
        disabled={disabled}
        label={'Поиск'}
        placeholder="Введите запрос..."
        value={searchTerm}
        onChange={(text) => dispatch(setSearchTerm(text))}
      />

      <AppSelectMulti
        disabled={disabled}
        label={'Город'}
        options={cityOptions}
        onChange={(selected) => dispatch(setSelectedCities([...selected]))}
        value={selectedCities}
      />
      <AppSelect
        disabled={disabled}
        label={'Компания'}
        options={companyOptions}
        onChange={(selected) => dispatch(setCompany(selected))}
        value={selectedCompany}
      />
    </div>
  )
}
