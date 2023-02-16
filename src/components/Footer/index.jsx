import LightLogo from '../../assets/light-logo.svg'
import './_footer.scss'

function Footer() {
  return (
    <footer>
      <img src={LightLogo} alt="Kasa logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer
