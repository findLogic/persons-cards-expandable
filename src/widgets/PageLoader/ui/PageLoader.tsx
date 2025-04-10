import { FC } from 'react'
import LoaderIcon from '@/shared/assets/icons/loader.svg?react'
import cls from './PageLoader.module.scss'

export const PageLoader: FC = () => {
  return (
    <div className={cls.loadingPage}>
      <div className={cls.loaderContainer}>
        <LoaderIcon className={cls.spinner} />
      </div>
    </div>
  )
}
