import { Navbar } from '@/widgets/Navbar'
import { Suspense } from 'react'
import { AppRouter } from './providers/router'

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <AppRouter />
      </Suspense>
    </div>
  )
}

export default App
