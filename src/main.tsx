import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./i18n";
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.tsx'
import ScrollToTop from './utils/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
