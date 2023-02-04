import Banner from "../../components/Banner"
import Card from "../../components/Card"

function Home({houses}) {
  return (
    <div>     
      <Banner page='home' />
      <main className="houses" >
        {
          houses.map( (house) => <Card key={house.id} house={house}></Card>)
        }
      </main>
    </div>
  )
}

export default Home
