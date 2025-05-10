import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Creates the root and loads the entire App using strict mode.
 * Strict mode is a tool for highlighting potential problems in the app.
 * For example, it identifies components with unsafe lifecycles.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
