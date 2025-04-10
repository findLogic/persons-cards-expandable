import { PersonCard } from '@/entities/Person'
import { PersonCardSkeleton } from '@/entities/Person/ui/PersonCardSkeleton'
import { getPersons } from '@/shared/api/persons'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import {
  selectSearchTerm,
  selectSelectedCities,
  selectSelectedCompany,
} from '@/features/PersonListFilter/model/selectors'
import { PersonListFilter } from '@/features/PersonListFilter'
import cls from './PersonListPage.module.scss'

export const PersonListPage = () => {
  const {
    data: persons = [],
    isLoading,
    isPending,
  } = useQuery({
    queryKey: ['persons'],
    queryFn: getPersons,
  })

  const searchTerm = useSelector(selectSearchTerm)
  const selectedCities = useSelector(selectSelectedCities)
  const selectedCompany = useSelector(selectSelectedCompany)

  const filteredPersons = useMemo(() => {
    return persons.filter((person) => {
      const matchesTerm =
        !searchTerm ||
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.email.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCity =
        selectedCities.length === 0 ||
        selectedCities.some((selectedCity) => person.address.city === selectedCity.label)

      const matchesCompany = !selectedCompany || person.company === selectedCompany.label

      return matchesTerm && matchesCity && matchesCompany
    })
  }, [persons, searchTerm, selectedCities, selectedCompany])

  if (isLoading || isPending) {
    return (
      <div className="page">
        <PersonListFilter disabled={true} />
        <div className={cls.personsContainer}>
          {Array.from({ length: 10 }).map((_, index) => (
            <PersonCardSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  if (!filteredPersons.length) {
    return (
      <div className="page">
        <PersonListFilter />
        <div className={cls.noPersons}>
          <p>Нет подходящих персон согласно Вашим запросам.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <PersonListFilter />
      <div className={cls.personsContainer}>
        {filteredPersons.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

export default PersonListPage
