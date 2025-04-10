import { Link } from 'react-router'
import { Person } from '../model/types/Person'
import cls from './PersonCard.module.scss'

interface PersonCardProps {
  person: Person
}

export const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <Link to={`/persons/${person.id}`} className={cls.card}>
      <div className={cls.header}>
        <img src={person.avatar} alt={person.name} className={cls.avatar} />
        <div>
          <h3 className={cls.name}>{person.name}</h3>
          <p className={cls.email}>{person.email}</p>
        </div>
      </div>
      <div className={cls.details}>
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
