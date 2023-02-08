import { Route, Routes } from 'react-router-dom'
import Error from '../../components/Error'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Logement from '../../pages/Logement'
import houses from '../../data/logements.json'

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home houses={houses} />} />
      <Route path="/About" element={<About />} />
      <Route path="/logement/:houseId" element={<Logement houses={houses} />} />
    </Routes>
  )
}
