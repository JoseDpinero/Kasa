import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import MyRoutes from './utils/Router'
import './style/_base.scss'
import Favicon from 'react-favicon'
import icon from './assets/favicon.svg'

const root = ReactDOM.createRoot(document.getElementById('root'))

document.title = "Kasa, Location d'appartement."

root.render(
  <React.StrictMode>
    <Favicon url={icon} />
    <Router>
      <Header />
      <MyRoutes />
      <Footer />
    </Router>
  </React.StrictMode>
)
