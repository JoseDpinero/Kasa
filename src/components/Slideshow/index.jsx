import { useState } from 'react'
import arrow from '../../assets/arrow.svg'

function SlideShow({ pictures, title }) {
  const [indexImage, setIndexImage] = useState(0)

  const lastImage = pictures.length - 1
  const nextImage = indexImage === lastImage ? 0 : indexImage + 1
  const previousImage = indexImage === 0 ? lastImage : indexImage - 1

  return (
    <div className="gallery">
      <img
        alt={title}
        key={title}
        src={pictures[indexImage]}
        className="gallery__slide"
      />
      {lastImage === 0 ? null : (
        <>
          <button
            onClick={() => setIndexImage(previousImage)}
            className="button button-left"
          >
            <img alt="arrow left" src={arrow} className="button__arrow" />
          </button>
          <button
            onClick={() => setIndexImage(nextImage)}
            className="button button-right"
          >
            <img alt="arrow right" src={arrow} className="button__arrow" />
          </button>
        </>
      )}
    </div>
  )
}
export default SlideShow
