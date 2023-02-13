import { Navigate, useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import SlideShow from '../../components/Slideshow'

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
    <>
      <main>
        <SlideShow pictures={pictures} title={house.title} />
        <h1>{house.title}</h1>
        <h2>{house.location} </h2>
        <p>{host.name}</p>
        <img src={host.picture} alt="host" />

        <div className="house__description">
          <div className="house__description-column">
            <Collapse title="Déscription" size="wide">
              {house.description}{' '}
            </Collapse>
          </div>
          <div className="house__description-column">
            <Collapse title="Équipements">
              <ul className="equipement">
                {equipments.map((equipment) => (
                  <li key={equipment} className="equipement__item">
                    ({equipment})
                  </li>
                ))}
              </ul>
            </Collapse>
          </div>
        </div>
      </main>
    </>
  )
}
export default Logement
