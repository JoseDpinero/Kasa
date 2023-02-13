function Banner({ page }) {
  return (
    <div className={'banner banner-' + page}>
      {page === 'home' ? <p>Chez vous, partout et ailleurs</p> : null}
    </div>
  )
}
export default Banner
