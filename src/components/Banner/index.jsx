import './_banner.scss'

function Banner({ page }) {
  return (
    <div className={'banner banner-' + page}>
      {page === 'home' ? (
        <div className="banner__text">
          <p>
            Chez vous,
            <br className="banner__text-br" /> partout et ailleurs
          </p>
        </div>
      ) : null}
    </div>
  )
}
export default Banner
