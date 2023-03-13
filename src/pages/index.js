import Banner from "@/components/Banner"
import Navbar from "@/components/Navbar"
import Head from "next/head"

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone | Ntami</title>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>

      <Navbar />

      <Banner />
    </div>
  )
}
