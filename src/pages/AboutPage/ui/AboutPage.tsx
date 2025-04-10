import cls from './AboutPage.module.scss'

export const AboutPage = () => {
  return (
    <div className={cls.container}>
      <section className={cls.section}>
        <h1 className={cls.title}>О проекте</h1>
        <p className={cls.text}>
          Это веб-приложение разработано в рамках тестового задания для компании PAREVO. Оно
          позволяет просматривать список пользователей с возможностью поиска, фильтрации и
          детализации данных.
        </p>
      </section>

      <section className={cls.section}>
        <h2 className={cls.subtitle}>Ключевые особенности</h2>

        <h3 className={cls.featureTitle}>Архитектура:</h3>
        <p className={cls.text}>Feature-Sliced Design для масштабируемости и удобства поддержки.</p>

        <h3 className={cls.featureTitle}>Стек технологий:</h3>
        <ul className={cls.list}>
          <li>React 19 + TypeScript для типобезопасности.</li>
          <li>Vite — быстрая сборка и горячая перезагрузка.</li>
          <li>Redux Toolkit + React Query — управление состоянием и кеширование данных.</li>
          <li>React Router — навигация между страницами.</li>
          <li>SCSS (Sass Embedded) — модульные стили.</li>
        </ul>

        <h3 className={cls.featureTitle}>Оптимизация:</h3>
        <ul className={cls.list}>
          <li>Динамическая загрузка компонентов (code splitting).</li>
          <li>Кеширование API-запросов через React Query.</li>
          <li>Пререндеринг и lazy loading.</li>
        </ul>
      </section>

      <section className={cls.section}>
        <h2 className={cls.subtitle}>Функционал</h2>

        <div className={cls.functionalityItem}>
          <div>
            <h3 className={cls.functionalityTitle}>Список пользователей:</h3>
            <ul className={cls.list}>
              <li>Загрузка данных с со своего сервера на express и faker.</li>
              <li>Поиск по имени/email и фильтрация (город, компания).</li>
              <li>Адаптивные карточки или таблица.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={cls.section}>
        <h2 className={cls.subtitle}>Инструменты разработки</h2>
        <ul className={cls.list}>
          <li>ESLint + Prettier — контроль качества кода.</li>
          <li>Husky + lint-staged — автоматические проверки перед коммитом.</li>
          <li>React Query Devtools — отладка запросов.</li>
        </ul>
      </section>
    </div>
  )
}

export default AboutPage
