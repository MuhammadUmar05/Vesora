import React from "react";
import heroimage2 from "../../assets/hero-image2.png";
import boxicon1 from "../../assets/box-icon1.png";
import boxicon2 from "../../assets/box-icon2.png";
import boxicon3 from "../../assets/box-icon3.png";
import boxicon4 from "../../assets/box-icon4.png";
function Service() {
  return (
    <>
      <section className="container sm:py-16 py-8 sm:w-[95%] grid lg:grid-cols-2 grid-cols-1 m-auto sm:px-3 px-2 gap-8">
        <div className="justify-center">
          <img src={heroimage2} alt="" className="w-full rounded-xl" />
        </div>
        <div className="sm:px-10  flex flex-col lg:items-start items-center justify-center gap-6 md:text-start text-center">
          <h1 className="sm:text-5xl text-4xl font-extrabold text-[#2B1B12]">
            We Help You To Find Your Dream Home
          </h1>
          <p className="font-semibold text-[#4F3527] sm:text-2xl text-lg">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality
          </p>
          <div className="flex w-full sm:gap-8 text-[#4F3527] justify-around">
            <div className="flex flex-col gap-3 p-2">
              <h1 className="font-extrabold tracking-wider sm:text-4xl text-2xl">
                8K+
              </h1>
              <p className="font-semibold sm:text-xl   ">Houses Available</p>
            </div>
            <div className="flex flex-col gap-3 p-2">
              <h1 className="font-extrabold tracking-wider sm:text-4xl text-2xl">
                6K+
              </h1>
              <p className="font-semibold sm:text-xl   ">Houses Sold</p>
            </div>
            <div className="flex flex-col gap-3 p-2">
              <h1 className="font-extrabold tracking-wider sm:text-4xl text-2xl">
                2K+
              </h1>
              <p className="font-semibold sm:text-xl   ">Trusted Agents</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:py-16 py-8 sm:w-[95%] my-4 m-auto px-4 flex flex-col items-center gap-6 ">
        <h1 className="sm:text-5xl text-4xl font-extrabold text-[#2B1B12] text-center">
          Why Choose Us
        </h1>
        <p className="font-semibold text-[#4F3527] sm:text-2xl text-lg text-center sm:max-w-[60%]">
          Elevating Your Home Buying Experience with Expertise, Integrity, and
          Unmatched Personalized Service
        </p>
        <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          <div className="bg-[#DDC7BB] flex flex-col gap-4 rounded-2xl w-full p-6 shadow">
            <div className="bg-[#FBF5F1] p-2 rounded-lg w-16">
              <img src={boxicon1} alt="" className="w-14" />
            </div>
            <h6 className="text-[#2B1B12] text-lg font-bold">
              Expert Guidance
            </h6>
            <p className="font-semibold text-[#4F3527] text-lg">
              Benefit from our team's seasoned expertise for a smooth buying
              experience
            </p>
          </div>
          <div className="bg-[#DDC7BB] flex flex-col gap-4 rounded-2xl w-full p-6 shadow">
            <div className="bg-[#FBF5F1] p-2 rounded-lg w-16">
              <img src={boxicon2} alt="" className="w-14" />
            </div>
            <h6 className="text-[#2B1B12] text-lg font-bold">
              Personalized Service
            </h6>
            <p className="font-semibold text-[#4F3527] text-lg">
              Our services adapt to your unique needs, making your journey
              stress-free
            </p>
          </div>
          <div className="bg-[#DDC7BB] flex flex-col gap-4 rounded-2xl w-full p-6 shadow">
            <div className="bg-[#FBF5F1] p-2 rounded-lg w-16">
              <img src={boxicon3} alt="" className="w-14" />
            </div>
            <h6 className="text-[#2B1B12] text-lg font-bold">
              Transparent Process{" "}
            </h6>
            <p className="font-semibold text-[#4F3527] text-lg">
              Stay informed with our clear and honest approach to buying your
              home
            </p>
          </div>
          <div className="bg-[#DDC7BB] flex flex-col gap-4 rounded-2xl w-full p-6 shadow">
            <div className="bg-[#FBF5F1] p-2 rounded-lg w-16">
              <img src={boxicon4} alt="" className="w-14" />
            </div>
            <h6 className="text-[#2B1B12] text-lg font-bold">
              Exceptional Support
            </h6>
            <p className="font-semibold text-[#4F3527] text-lg">
              Providing peace of mind with our responsive and attentive customer
              service
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
