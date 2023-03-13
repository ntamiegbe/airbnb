import Image from "next/image"
import bannerImage from '../assets/banner2.jpg'

// https://links.papareact.com/0fm

const Banner = () => {
  return (
    <div className="relative h-[330px] md:h-[400px]">
        <Image src={bannerImage} fill style={{objectFit: 'cover'}}/>
        <div className="absolute top-1/2 w-full text-center">
            <p className="text-white text-base md:text-lg mb-3">Not sure what to do?</p>
            <button className="bg-white px-10 shadow-md hover:shadow-xl active:scale-90 transition duration-150 py-4 rounded-xl text-red-500 font-semibold">Get started</button>
        </div>
    </div>
  )
}

export default Banner