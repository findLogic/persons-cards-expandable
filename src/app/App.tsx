import { Suspense } from 'react'
import { AppRouter } from './providers/router'

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
