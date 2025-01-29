import React from "react";
import verify_logo from "../../assets/verify-icon.png";

function Contact() {
  return (
    <>
      <section className="m-auto py-20 sm:px-10 px-3 flex flex-col items-center justify-center sm:gap-10 gap-8 md:w-[60%] sm:w-[95%] text-[#4F3527]">
        <h1 className="sm:text-5xl text-3xl font-extrabold text-[#2B1B12] text-center">
          Do You Have Any Questions?
          <br /> Get Help From Us
        </h1>
        <div className="flex sm:flex-row flex-col sm:justify-around  justify-center gap-4 items-center w-full">
          <div className="flex items-center gap-2">
            <img src={verify_logo} alt="" className="w-5 h-5" />
            <p className="text-lg font-semibold">
              Chat live with our support team
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={verify_logo} alt="" className="w-5 h-5" />
            <p className="text-lg font-semibold">Browse our FAQ</p>
          </div>
        </div>
        <div className="flex items-center gap-6 w-full flex-col md:flex-row justify-center sm:px-0 p-4">
          <label class="input input-bordered flex items-center gap-2 sm:w-[65%] w-full bg-[#DDC7BB]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              class="grow font-semibold placeholder:text-[#4F3527]"
              placeholder="Email"
            />
          </label>
          <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-90 px-10 py-3 rounded-xl w-full sm:w-auto">
            Submit
          </button>
        </div>
      </section>
    </>
  );
}

export default Contact;
