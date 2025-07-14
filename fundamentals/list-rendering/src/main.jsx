import { createRoot } from 'react-dom/client'
import './index.css'

import Landing from './app/landing/index.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <div id="wrapper">
      <Landing/>
    </div>
  </>
)
