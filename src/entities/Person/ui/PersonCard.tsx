import { Person } from '../model/Person'

interface PersonCardProps {
  person: Person
}

export const PersonCard = ({ person }: PersonCardProps) => {
  return (
    <div className="person-card">
      <div className="person-card-header">
        <img src={person.avatar} alt={person.name} className="person-card-avatar" />
        <div>
          <h3 className="person-card-name">{person.name}</h3>
          <p className="person-card-email">{person.email}</p>
        </div>
      </div>
      <div className="person-card-details">
        <p>
          <strong>Phone:</strong> {person.phone}
        </p>
        <p>
          <strong>Company:</strong> {person.company}
        </p>
        <p>
          <strong>Address:</strong> {person.address}
        </p>
      </div>
    </div>
  )
}
