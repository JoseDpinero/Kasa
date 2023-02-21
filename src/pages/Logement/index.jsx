import { Navigate, useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import Rating from '../../components/Rating/Rating'
import SlideShow from '../../components/Slideshow'
import Tags from '../../components/Tags'
import './_logement.scss'

function Logement({ houses }) {
  const { houseId } = useParams()
  const indexFound = houses.findIndex((element) => element.id === houseId)

  if (indexFound === -1) {
    return <Navigate to="/error" />
  }

  const house = houses[indexFound]
  const host = house.host
  const equipments = house.equipments
  const pictures = house.pictures
  const tags = house.tags

  return (
    <main>
      <SlideShow pictures={pictures} title={house.title} />

      <section className="house">
        <div className="house-wrapper">
          <h1 className="house__title">{house.title}</h1>
          <h2 className="house__location">{house.location} </h2>
          <Tags tags={tags} />
        </div>

        <div className="house__owner">
          <div className="owner">
            <p className="owner__name">{host.name}</p>
            <img src={host.picture} alt="host" className="owner__image" />
          </div>
          <Rating rate={house.rating} />
        </div>
      </section>

      <section className="house__description">
        <div className="house__description-column">
          <Collapse title="Déscription" logement>
            {house.description}
          </Collapse>
        </div>

        <div className="house__description-column">
          <Collapse title="Équipements" logement>
            <ul className="equipement">
              {equipments.map((equipment) => (
                <li key={equipment} className="equipement__item">
                  ({equipment})
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
      </section>
    </main>
  )
}
export default Logement
