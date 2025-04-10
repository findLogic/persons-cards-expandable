import { getPerson } from '@/shared/api/persons'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router'
import './PersonDetailPage.scss'
import { PageLoader } from '@/widgets/PageLoader'

export const PersonDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { data: person, isLoading } = useQuery({
    queryKey: ['persons', id],
    queryFn: () => getPerson(Number(id)),
    enabled: !!id,
  })

  if (isLoading) {
    return <PageLoader />
  }

  if (!person) {
    navigate('/not-found')
    return null
  }

  return (
    <div className={`person-page `}>
      <header className="person-header">
        <button className="back-button" onClick={() => navigate(-1)} aria-label="Go back">
          ← Назад
        </button>
        <h4>Профиль сотрудника</h4>
      </header>

      <div className="person-container">
        <div className="person-detail-card">
          <div className="person-avatar-container">
            <img src={person.avatar} alt={person.name} className="person-avatar" loading="lazy" />
            <span className={`status ${person.isActive ? 'active' : 'inactive'}`}>
              {person.isActive ? 'Активен' : 'Неактивен'}
            </span>
          </div>

          <div className="person-info">
            <h2 className="person-name">{person.name}</h2>
            <p className="person-meta">
              <span>Возраст: {person.age}</span>
              <span>Дата регистрации: {new Date(person.registeredAt).toLocaleDateString()}</span>
            </p>

            <div className="info-section">
              <h3>Контактная информация</h3>
              <p>
                <strong>Email:</strong> <a href={`mailto:${person.email}`}>{person.email}</a>
              </p>
              <p>
                <strong>Телефон:</strong> <a href={`tel:${person.phone}`}>{person.phone}</a>
              </p>
            </div>

            <div className="info-section">
              <h3>Адрес</h3>
              <p>
                {person.address.street},<br />
                {person.address.city},<br />
                {person.address.country}
              </p>
            </div>

            <div className="info-section">
              <h3>Компания</h3>
              <p>{person.company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonDetailPage
