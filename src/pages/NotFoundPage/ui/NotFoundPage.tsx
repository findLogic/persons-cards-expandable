import { FC } from 'react'
import { useNavigate } from 'react-router'
import './NotFoundPage.scss'

export const NotFoundPage: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={`not-found-page`}>
      <div className="not-found-container">
        <div className="error-illustration">
          <div className="error-icon">404</div>
          <div className="error-shadow"></div>
        </div>

        <h1 className="error-title">Страница не найдена</h1>

        <p className="error-message">
          Похоже, мы не можем найти нужную вам страницу. Возможно, она была перемещена или удалена.
        </p>

        <div className="action-buttons">
          <button className="primary-button" onClick={() => navigate('/')}>
            На главную
          </button>
        </div>
      </div>
    </div>
  )
}
