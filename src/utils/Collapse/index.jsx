import { useState } from "react"
import './_collapse.scss'
import arrow from '../../assets/arrow.svg'

function Collapse({title,children,size}){

    const [visible,setVisible] = useState(false)
    const name = size === 'width' ? 'collapse__text-width collapse__text' : 'collapse__text'
    return (<>
        <div className="collapse">
            <button className="collapse__button" onClick={ () => setVisible(!visible)}>
                {title} 
                <img alt="arrow" src={arrow} className={!visible ? 'collapse__arrow':'collapse__arrow-revert'} />
            </button>
            <div className={  visible ? name : name+" hidden "}>{children}</div>
        </div>
    </>
    )
}
 export default Collapse