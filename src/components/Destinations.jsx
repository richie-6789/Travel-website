import React from "react"
import Borabora from "../assets/borabora123.jpg"
import Borabora2 from "../assets/borabora2.jpg"
import airview from "../assets/airview.jpg"
import Maldives from "../assets/maldavies123.jpg"
import dosome from "../assets/dosome.jpg"


const Destinations = () => {
  return (
    <div className="mx-auto max-w-[1240px] py-16 px-4 text-center">
        <h1>
        Discover the allure of all-inclusive resort
        </h1>
        <p className="py-2 text-lg">on Exquisite Beaches Around the Globe</p>

        <div className="grid grid-rows-none md:grid-cols-5 py-10 gap-2 md:gap-4">
            <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={Borabora} alt="" />
            <img className="w-full h-full object-cover" src={Borabora2} alt="" />
            <img className="w-full h-full object-cover" src={Maldives} alt="" />
            <img className="w-full h-full object-cover" src={dosome} alt="" />
            <img className="w-full h-full object-cover" src={airview} alt="" />
        </div>
    </div>
  )
}

export default Destinations