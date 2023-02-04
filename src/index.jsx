import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import MyRoutes from './utils/Router'
import './style/style.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
<Router>
  <Header/>
  <MyRoutes/>
  <Footer/>
</Router>
  </React.StrictMode>
)
