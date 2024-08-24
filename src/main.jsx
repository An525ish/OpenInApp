import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { UserProvider } from '@/context/UserContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <GoogleOAuthProvider clientId="http://627228315031-9li6t205om7d9t25oo4onj3bnu5dgstc.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </UserProvider>
  </StrictMode>
)
