import Banner from '../../components/Banner'
import Card from '../../components/Card'
import './_home.scss'

function Home({ houses }) {
  return (
    <>
      <Banner page="home" />
      <main className="houses">
        {houses.map((house) => (
          <Card
            key={house.id}
            title={house.title}
            id={house.id}
            cover={house.cover}
          ></Card>
        ))}
      </main>
    </>
  )
}

export default Home
