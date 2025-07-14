import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <Hero/>
  </>
)
