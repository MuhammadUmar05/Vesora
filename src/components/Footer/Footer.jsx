import React from "react";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <>
      <footer className="bg-[#DDC7BB] sm:px-16 px-8 py-24 font-bold text-[#4F3527]">
        <div className="flex sm:justify-between sm:flex-row flex-col  flex-wrap gap-14">
          <div className="flex flex-col justify-center max-w-60 gap-4">
            <img src={logo} alt="" className="w-20" />
            <p className="text-xl">
              Bring you closer to your dream home, one click at a time.
            </p>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-lg cursor-pointer">
              <li className="text-[#2B1B12]  hover:underline">About</li>
              <li className="hover:underline">Our Story</li>
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">Our Team</li>
              <li className="hover:underline">Resources</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-lg cursor-pointer">
              <li className="text-[#2B1B12] hover:underline">Support</li>
              <li className="hover:underline">FAQ</li>
              <li className="hover:underline">Contact Us</li>
              <li className="hover:underline">Help Center</li>
              <li className="hover:underline">Policy</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-lg cursor-pointer">
              <li className="text-[#2B1B12] hover:underline">Find Us</li>
              <li className="hover:underline">Events</li>
              <li className="hover:underline">Locations</li>
              <li className="hover:underline">Newsletter</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-4 text-lg cursor-pointer">
              <li className="text-[#2B1B12] hover:underline">Our Social</li>
              <li className="hover:underline">Instagram</li>
              <li className="hover:underline">Facebook</li>
              <li className="hover:underline">Twitter (X)</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
