import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

function Card({title,cover,id}){
    return (
        <Link className="card" to={'/logement/' + id} >
            <img alt={title} src={cover} className='card__image'/>
            <p className="card__title">{title}</p>
        </Link>
    )
}
export default Card

Card.propTypes ={
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

Card.defaultProps ={
    title: '',
    cover: '',
    id: '',
}