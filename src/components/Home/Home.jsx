import React from "react";
import heroimage from "../../assets/image.png";
import homeicon from "../../assets/home.png";
import locationicon from "../../assets/location.png";
import priceicon from "../../assets/price.png";
function Home() {
  return (
    <>
      <div className="container lg:py-0 sm:py-16 py-6 sm:w-[90%] grid lg:grid-cols-2 grid-cols-1 m-auto sm:px-4 px-2">
        <div className="sm:px-10  flex flex-col lg:items-start items-center gap-6 justify-center md:text-start text-center">
          <h1 className="sm:text-7xl text-4xl font-extrabold text-[#2B1B12]">
            Find Your Dream Home
          </h1>
          <p className="font-semibold text-[#4F3527] sm:text-2xl text-xl">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision
          </p>
          <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-95 transition ease-in-out w-[60%] px-5 py-4 rounded-lg mt-4">
            Explore
          </button>
        </div>
        <div className="justify-center">
          <img src={heroimage} alt="" className="w-full" />
        </div>
      </div>
      <div className="bg-[#DDC7BB] lg:max-w-[85%] sm:max-w-[60%] max-w-[90%] mb-10 m-auto rounded-lg flex lg:flex-row flex-col gap-6 sm:px-10 px-4 py-6 justify-center">
        <label class="input input-bordered flex items-center gap-2 bg-[#FBF5F1] text-[#695346]">
          <input type="text" class="grow placeholder:text-[#695346] placeholder:font-bold" placeholder="Location" />
          <img src={locationicon} alt="" className="h-5 w-5" />
        </label>
        <label class="input input-bordered flex items-center gap-2 bg-[#FBF5F1] text-[#695346]">
          <input type="text" class="grow placeholder:text-[#695346] placeholder:font-bold" placeholder="Type" />
          <img src={homeicon} alt="" className="h-5 w-5" />
        </label>
        <label class="input input-bordered flex items-center gap-2 bg-[#FBF5F1] text-[#695346]">
          <input type="text" class="grow placeholder:text-[#695346] placeholder:font-bold" placeholder="Price Range" />
          <img src={priceicon} alt="" className="h-5 w-5" />
        </label>
        <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-95 transition ease-in-out px-8 rounded-lg lg:py-0 py-2">
            Find
          </button>
      </div>
    </>
  );
}

export default Home;
