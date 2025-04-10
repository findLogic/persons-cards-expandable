import cls from './PersonCardSkeleton.module.scss'

export const PersonCardSkeleton = () => {
  return (
    <div className={cls.card}>
      <div className={cls.header}>
        <div className={cls.avatar} />
        <div className={cls.headerText}>
          <div className={cls.name} />
          <div className={cls.email} />
        </div>
      </div>
      <div className={cls.details}>
        <div className={cls.detailLine} />
        <div className={cls.detailLine} />
        <div className={cls.detailLine} />
      </div>
    </div>
  )
}
