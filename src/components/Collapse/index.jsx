import { useState } from 'react'
import arrow from '../../assets/arrow.svg'
import './_collapse.scss'

function Collapse({ title, children, size }) {
  const [visible, setVisible] = useState(false)
  const name = size
    ? 'collapse__content collapse__content-' + size
    : 'collapse__content'
  return (
    <div className="collapse">
      <button className="collapse__button" onClick={() => setVisible(!visible)}>
        {title}
        <img
          alt="arrow"
          src={arrow}
          className={!visible ? 'collapse__arrow-revert' : 'collapse__arrow'}
        />
      </button>
      <div className={visible ? name : name + ' hidden '}>{children}</div>
    </div>
  )
}
export default Collapse
