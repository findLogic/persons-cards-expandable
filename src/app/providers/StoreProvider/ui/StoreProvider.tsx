import { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from '../config/store'

export const StoreProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}
