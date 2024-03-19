import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex mt-4">
      <img
        src="https://www.asiaadventurepakistan.com/wp-content/uploads/2023/03/asiaadventurepakistan.jpg"
        alt="travel and tour"
        className="ml-14"
      />

      <div className="font-bold flex">
        <ul className="flex ml-28 mt-10 text-lg cursor-pointer">
          <li className="mr-16">HOME</li>
          <li className="mr-16">ABOUT US</li>
          <li className="mr-16">TOURS</li>
          <li className="mr-16">TREKS</li>
          <li className="mr-16">CULTURAL TOURS</li>
          <li className="mr-16">JEEP SAFARI TOURS</li>
          <li className="mr-16">CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
