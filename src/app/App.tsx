import { Navbar } from '@/widgets/Navbar'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <div className="page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
