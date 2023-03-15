import Banner from "@/components/Banner"
import ExploreCard from "@/components/ExploreCard"
import Navbar from "@/components/Navbar"
import Head from "next/head"

const exploreData = [
  {
    "name": "Paris",
    "population": 2.14,
    "image": "https://www.planetware.com/photos-large/F/france-eiffel-tower.jpg"
  },
  {
    "name": "London",
    "population": 9.13,
    "image": "https://www.planetware.com/wpimages/2023/01/england-london-top-attractions-things-to-do-intro-paragraph-big-ben-thames-bridge.jpg"
  },
  {
    "name": "Madrid",
    "population": 3.33,
    "image": "https://www.planetware.com/photos-large/E/spain-madrid-estadio-santiago-bernabeu.jpg"
  },
  {
    "name": "Berlin",
    "population": 3.77,
    "image": "https://www.planetware.com/wpimages/2021/03/germany-top-attractions-munichs-marienplatz.jpg"
  },
  {
    "name": "Rome",
    "population": 2.87,
    "image": "https://www.planetware.com/photos-large/I/italy-rome-colosseum.jpg"
  },
  {
    "name": "Barcelona",
    "population": 1.62,
    "image": "https://www.planetware.com/photos-large/E/spain-barcelona-sagrada-familia.jpg"
  },
  {
    "name": "Vienna",
    "population": 1.91,
    "image": "https://www.planetware.com/photos-large/A/belvedere-palaces-0.jpg"
  },
  {
    "name": "Amsterdam",
    "population": 0.87,
    "image": "https://www.planetware.com/photos-large/NL/netherlands-amsterdam-attractions-the-rijksmuseum.jpg"
  },
  {
    "name": "Athens",
    "population": 3.75,
    "image": "https://www.planetware.com/wpimages/2019/09/greece-athens-attractions-hadrians-library-pillars.jpg"
  },
  {
    "name": "Prague",
    "population": 1.33,
    "image": "https://www.planetware.com/photos-large/CZ/czech-republic-prague-charles-bridge.jpg"
  }
]

export default function Home({ cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone | Ntami</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>

      <Navbar />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 md:px-16">

        <section className="pt-6">
          <h2 className="text-3xl md:text-4xl text-gray-800 font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map(data => (
              <ExploreCard name={data.name} image={data.image} population={data.population} key={data.name} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          {cardsData.map(data => (
              
          ))}
        </section>

      </main>
    </div>
  )
}

export async function getStaticProps() {
  const cardsData = await fetch('https://links.papareact.com/zp1  ')
    .then((res) => res.json())

  return {
    props: {
      cardsData
    }
  }
}
