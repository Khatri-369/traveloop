import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeProvider.tsx'
import { useAuthStore } from './store/authStore'

// Load existing Supabase session before first render
useAuthStore.getState().loadSession();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="traveloop-theme">
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
