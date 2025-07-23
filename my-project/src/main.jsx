import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Cards.jsx'
import MovieCards from './MovieCards.jsx'
import Home from './Home.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>

  </StrictMode>,
)
