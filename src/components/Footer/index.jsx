import LightLogo from '../../assets/light-logo.svg'
import './_footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img src={LightLogo} alt="Kasa logo" className="footer__image" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
export default Footer
