import { FC } from 'react'
import LoaderIcon from '@/shared/assets/icons/loader.svg?react'

export const PageLoader: FC = () => {
  return (
    <div className="loading-page">
      <div className="loader-container">
        <LoaderIcon className="spinner" />
      </div>
    </div>
  )
}
