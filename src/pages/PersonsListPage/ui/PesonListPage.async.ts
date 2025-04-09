import { lazy } from 'react'

export const PersonListPageAsync = lazy(async () => await import('./PersonListPage'))
