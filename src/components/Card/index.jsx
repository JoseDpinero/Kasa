import { Link } from "react-router-dom"

function Card({house}){
    console.log(house)
    return (
        <Link className="card" to='/'>
            <img alt={house.title} src={house.cover} className='card__image'/>
            <p className="card__title">{house.title}</p>
        </Link>
    )
}
export default Card