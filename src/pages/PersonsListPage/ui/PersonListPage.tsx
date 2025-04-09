import { PersonCard } from '@/entities/Person'
import { Person } from '@/entities/Person/model/Person'
import { useEffect, useState } from 'react'

export const PersonListPage = () => {
  const [persons, setPersons] = useState<Person[]>([])

  useEffect(() => {
    // Здесь может быть запрос к API
    const mockUsers = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: `+1 (555) 555-${1000 + i}`,
      company: `Company ${i + 1}`,
      address: `${i + 100} Main St, City`,
      avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
    }))
    setPersons(mockUsers)
  }, [])

  return (
    <div className="persons-container">
      {persons.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  )
}

export default PersonListPage
