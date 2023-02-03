import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import MyRoutes from './utils/Router'
import GlobalStyle from './utils/style/GlobalStyle'
import './utils/style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
<Router>
  <GlobalStyle/>
  <Header/>
  <MyRoutes/>
  <Footer/>
</Router>
  </React.StrictMode>
)
