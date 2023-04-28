import React from "react"

const Search = () => {
  return (
    <div className="max-w-[1400px] mx-auto grid my-4 lg:grid-cols-3 py-10 px-4 gap-4 rounded-lg bg-gradient-to-r from-teal-700 to-cyan-600">
        <div className="lg:col-span-2 flex flex-col justify-evenly">
            <div className="px-4 text-gray-200">
                <h2>ELEVATE YOUR ROMANCE: EXCLUSIVE COUPLES' RETREAT</h2>
                <p className="py-8 text-lg text-white">
                Welcome to our exquisite all-inclusive beach resort! Discover the perfect blend of relaxation and adventure as you soak up the sun on pristine white sands, swim in turquoise waters, and indulge in world-class amenities. With lavish accommodations, delectable dining options, thrilling water sports, and rejuvenating spa treatments, your every need will be catered to.<br /> <br/>
                Create unforgettable memories with your loved ones as you immerse yourself in the rich culture and vibrant atmosphere of beach destinations around the world. Book your dream vacation with us now and embark on a journey of pure bliss!
                </p>
            </div>
            <div className='grid sm:grid-cols-2 gap-8 py-4 mx-2'>
                {/* <div className=' text-white p-2 m-x-2 flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <RiCustomerService2Fill className="fill" size={40} />
                    </button>
                    <div>
                        <h3 className=''>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
                <div className='text-white mx-2 p-2 flex flex-col lg:flex-row items-center text-center'>
                    <button>
                        <MdOutlineTravelExplore size={40} />
                    </button>
                    <div>
                        <h3 className=''>LEADING SERVICE</h3>
                        <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div> */}
            </div>  
        </div>
        <div className="bg-gray-100 rounded-2xl m-4">
            <div className=" text-center mx-2  ">
                <p className="pt-4">GET ADDITIONAL 10% OFF</p>
                <p className="py-4">12 HOURS LEFT</p>
                <p className="mx-2 mb-2 rounded-md bg-gray-800 text-gray-200 py-2">BOOK NOW & SAVE</p>
                <hr class="mt-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:mt-6 md:w-[12em] dark:bg-gray-700" />
            </div>
            <form className='mx-4'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option>Grande Antigua</option>
                      <option>Key West</option>
                      <option>Maldives</option>
                      <option>Cozumel</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
        </div>
    </div>
  )
}

export default Search