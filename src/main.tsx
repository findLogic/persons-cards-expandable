import '@/app/styles/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from '@/app/App'
import { ThemeProvider } from '@/app/providers/ThemeProvider/ui/ThemeProvider'
import { TanstackQueryProvider } from '@/app/providers/TanstackQueryProvider'
import { StoreProvider } from './app/providers/StoreProvider'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <TanstackQueryProvider>
        <StoreProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </StoreProvider>
      </TanstackQueryProvider>
    </StrictMode>
  </BrowserRouter>,
)
