import { Link } from "react-router-dom"

function Error() {
  return (
    <main id="error-page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to='/'> Retourner sur la page d'accueil</Link>
    </main>
  )
} 

export default  Error
