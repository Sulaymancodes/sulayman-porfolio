import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NewspaperPortfolio from './NewspaperPorfolio'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewspaperPortfolio />
  </StrictMode>,
)
