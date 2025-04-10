import { lazy } from 'react'

export const PersonDetailPageAsync = lazy(async () => await import('./PersonDetailPage'))
