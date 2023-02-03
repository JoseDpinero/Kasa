import { Route, Routes } from 'react-router-dom'
import Error from '../../components/Error'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Logement from '../../pages/Logement'

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/logement/" element={<Logement />} />
    </Routes>
  )
}
