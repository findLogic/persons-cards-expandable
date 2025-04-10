import { Link } from 'react-router'
import { Person } from '../model/types/Person'

interface PersonCardProps {
  person: Person
}

export const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <Link to={`/persons/${person.id}`} className="person-card">
      <div className="person-card-header">
        <img src={person.avatar} alt={person.name} className="person-card-avatar" />
        <div>
          <h3 className="person-card-name">{person.name}</h3>
          <p className="person-card-email">{person.email}</p>
        </div>
      </div>
      <div className="person-card-details">
        <p>
          <strong>Телефон:</strong> {person.phone}
        </p>
        <p>
          <strong>Компания:</strong> {person.company}
        </p>
        <p>
          <strong>Адрес:</strong> {person.address.street}, {person.address.city},{' '}
          {person.address.country}
        </p>
      </div>
    </Link>
  )
}
