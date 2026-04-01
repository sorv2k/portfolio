import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.jsx'

// Initialize Google Analytics
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
if (gaId) {
  ReactGA.initialize(gaId)
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
