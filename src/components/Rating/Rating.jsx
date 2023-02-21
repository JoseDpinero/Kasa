import full_star from '../../assets/full_star.svg'
import empty_star from '../../assets/empty_star.svg'
import './_rating.scss'

function Rating({ rate }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div className="rating">
      {range.map((rangeElem) =>
        rate >= rangeElem ? (
          <img
            key={rangeElem + 'full star'}
            src={full_star}
            alt={'étoiles pleine'}
            className="rating__star"
          />
        ) : (
          <img
            key={rangeElem + 'stars left'}
            src={empty_star}
            alt={'étoiles vide'}
            className="rating__star"
          />
        )
      )}
    </div>
  )
}
export default Rating
