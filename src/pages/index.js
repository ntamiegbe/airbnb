import Banner from "@/components/Banner"
import Navbar from "@/components/Navbar"
import Head from "next/head"

const exploreData = [
  {
    "name": "Lagos",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Lagos_at_Night.JPG/1200px-Lagos_at_Night.JPG",
    "population": "14,862,000"
  },
  {
    "name": "Kano",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Kano_City_Wall_and_Gate%2C_Kano%2C_Nigeria_%2835237759852%29.jpg/1200px-Kano_City_Wall_and_Gate%2C_Kano%2C_Nigeria_%2835237759852%29.jpg",
    "population": "3,848,885"
  },
  {
    "name": "Ibadan",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/University_of_Ibadan_-_Gate.jpg/1200px-University_of_Ibadan_-_Gate.jpg",
    "population": "3,078,400"
  },
  {
    "name": "Abuja",
    "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Abuja_International_Conference_Center_01.jpg",
    "population": "2,520,000"
  },
  {
    "name": "Port Harcourt",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Port_Harcourt_Abubakar_Tafawa_Balewa_Road_Nigeria.jpg/1200px-Port_Harcourt_Abubakar_Tafawa_Balewa_Road_Nigeria.jpg",
    "population": "1,382,592"
  }
]

export default function Home() {
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
          {exploreData?.map(data => (
            <h1>{data.name}</h1>
          ))}
        </section>
      </main>
    </div>
  )
}

// export async function getStaticProps() {
//   const exploreData = await fetch('https://links.papareact.com/pyp')
//     .then((res) => res.json())

//   return {
//     props: {
//       exploreData
//     }
//   }
// }
