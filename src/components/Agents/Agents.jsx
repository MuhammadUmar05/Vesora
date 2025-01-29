import React from "react";
import house_1 from "../../assets/house-1.png";
import house_2 from "../../assets/house-2.png";
import house_3 from "../../assets/house-3.png";
import house_4 from "../../assets/house-4.jpg";
import house_5 from "../../assets/house-5.jpg";
import house_6 from "../../assets/house-6.jpg";
import locationicon from "../../assets/location.png";
import homeicon from "../../assets/home.png";
import sizeicon from "../../assets/size.png";
import card_1 from "../../assets/card-1.png";
import card_2 from "../../assets/card-2.png";
import card_3 from "../../assets/card-3.png";

function Agents() {
  return (
    <>
      <section className="text-[#4F3527] sm:py-16 py-8 sm:w-[85%] my-4 m-auto sm:px-4 px-3 flex flex-col items-center gap-12 ">
        <h1 className="sm:text-5xl text-4xl font-extrabold text-[#2B1B12] text-center">
          Our Popular Residences
        </h1>

        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="bg-[#DDC7BB] flex flex-col  rounded-3xl w-full shadow">
            <div>
              <img src={house_1} alt="" className="w-full rounded-t-3xl" />
            </div>
            <div className="sm:p-6 px-2 py-6 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <img src={locationicon} alt="" className="w-5 h-5" />
                <h6 className="font-bold text-xl text-[#2B1B12]">
                  Beverly Hills, California
                </h6>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={homeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-lg">4 Rooms</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={sizeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className=" font-semibold text-lg">3,500 sq ft</p>
                </div>
              </div>
              <div className="flex items-center justify-between pr-2">
                <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-90 px-5 py-2 rounded-lg">
                  Check Out
                </button>
                <p className="font-bold text-lg">$3,000,000</p>
              </div>
            </div>
          </div>
          <div className="bg-[#DDC7BB] flex flex-col  rounded-3xl w-full shadow">
            <div>
              <img src={house_2} alt="" className="w-full rounded-t-3xl" />
            </div>
            <div className="sm:p-6 px-2 py-6 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <img src={locationicon} alt="" className="w-5 h-5" />
                <h6 className="font-bold text-xl text-[#2B1B12]">
                  Pal Alto, California
                </h6>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={homeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-lg">3 Rooms</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={sizeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className=" font-semibold text-lg">3,000 sq ft</p>
                </div>
              </div>
              <div className="flex items-center justify-between pr-2">
                <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-90 px-5 py-2 rounded-lg">
                  Check Out
                </button>
                <p className="font-bold text-lg">$2,250,000</p>
              </div>
            </div>
          </div>
          <div className="bg-[#DDC7BB] flex flex-col  rounded-3xl w-full shadow">
            <div>
              <img src={house_3} alt="" className="w-full rounded-t-3xl" />
            </div>
            <div className="sm:p-6 px-2 py-6 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <img src={locationicon} alt="" className="w-5 h-5" />
                <h6 className="font-bold text-xl text-[#2B1B12]">
                  San Francisco, California
                </h6>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={homeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-lg">6 Rooms</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={sizeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className=" font-semibold text-lg">3,800 sq ft</p>
                </div>
              </div>
              <div className="flex items-center justify-between pr-2">
                <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-90 px-5 py-2 rounded-lg">
                  Check Out
                </button>
                <p className="font-bold text-lg">$2,500,000</p>
              </div>
            </div>
          </div>
          <div className="bg-[#DDC7BB] flex flex-col  rounded-3xl w-full shadow">
            <div>
              <img src={house_4} alt="" className="w-full rounded-t-3xl" />
            </div>
            <div className="sm:p-6 px-2 py-6 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <img src={locationicon} alt="" className="w-5 h-5" />
                <h6 className="font-bold text-xl text-[#2B1B12]">
                  San Francisco, California
                </h6>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={homeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-lg">3 Rooms</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={sizeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className=" font-semibold text-lg">3,500 sq ft</p>
                </div>
              </div>
              <div className="flex items-center justify-between pr-2">
                <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-90 px-5 py-2 rounded-lg">
                  Check Out
                </button>
                <p className="font-bold text-lg">$2,800,000</p>
              </div>
            </div>
          </div>
          <div className="bg-[#DDC7BB] flex flex-col  rounded-3xl w-full shadow">
            <div>
              <img src={house_5} alt="" className="w-full rounded-t-3xl" />
            </div>
            <div className="sm:p-6 px-2 py-6 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <img src={locationicon} alt="" className="w-5 h-5" />
                <h6 className="font-bold text-xl text-[#2B1B12]">
                  Pal Alto, California
                </h6>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={homeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-lg">2 Rooms</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={sizeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className=" font-semibold text-lg">3,200 sq ft</p>
                </div>
              </div>
              <div className="flex items-center justify-between pr-2">
                <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-90 px-5 py-2 rounded-lg">
                  Check Out
                </button>
                <p className="font-bold text-lg">$2,000,000</p>
              </div>
            </div>
          </div>
          <div className="bg-[#DDC7BB] flex flex-col  rounded-3xl w-full shadow">
            <div>
              <img src={house_6} alt="" className="w-full rounded-t-3xl" />
            </div>
            <div className="sm:p-6 px-2 py-6 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <img src={locationicon} alt="" className="w-5 h-5" />
                <h6 className="font-bold text-xl text-[#2B1B12]">
                  Beverly Hills, California
                </h6>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={homeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className="font-semibold text-lg">3 Rooms</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-md">
                    <img src={sizeicon} alt="" className="w-5 h-5" />
                  </div>
                  <p className=" font-semibold text-lg">2,750 sq ft</p>
                </div>
              </div>
              <div className="flex items-center justify-between pr-2">
                <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-90 px-5 py-2 rounded-lg">
                  Check Out
                </button>
                <p className="font-bold text-lg">$2,200,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#fef7f2] sm:p-8 p-2 my-12 flex flex-col items-center justify-center gap-8">
        <h1 className="sm:text-5xl text-4xl font-extrabold text-[#2B1B12] text-center">
          What People Say About Dwello
        </h1>
        <div className="carousel carousel-center rounded-box sm:w-[80%] h-[370px] sm:h-[400px] sm:space-x-14 space-x-6 p-4">
          <div className="carousel-item">
            <img src={card_1} className="rounded-box object-fill" />
          </div>
          <div className="carousel-item">
            <img src={card_2} className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src={card_3} className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src={card_1} className="rounded-box object-fill" />
          </div>
          <div className="carousel-item">
            <img src={card_2} className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src={card_3} className="rounded-box" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Agents;
