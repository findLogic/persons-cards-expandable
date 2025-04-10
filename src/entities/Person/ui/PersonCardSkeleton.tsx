import './PersonCardSkeleton.scss'

export const PersonCardSkeleton = () => {
  return (
    <div className="person-card skeleton">
      <div className="person-card-header">
        <div className="person-card-avatar skeleton-box" />
        <div className="skeleton-content">
          <div className="skeleton-box skeleton-title" />
          <div className="skeleton-box skeleton-text" />
        </div>
      </div>
      <div className="person-card-details">
        <div className="skeleton-box skeleton-text" />
        <div className="skeleton-box skeleton-text" />
        <div className="skeleton-box skeleton-text" />
      </div>
    </div>
  )
}
