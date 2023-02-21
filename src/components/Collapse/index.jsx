import { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import './_collapse.scss'

function Collapse({ title, children, logement }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className={logement ? 'collapse collapse-logement' : 'collapse'}>
      <button className="collapse__button" onClick={() => setVisible(!visible)}>
        {title}
        <img
          alt="arrow"
          src={arrow}
          className={visible ? 'collapse__arrow' : 'collapse__arrow-revert'}
        />
      </button>
      <div
        className={visible ? 'collapse__content' : 'collapse__content hidden '}
      >
        {children}
      </div>
    </div>
  )
}
export default Collapse
