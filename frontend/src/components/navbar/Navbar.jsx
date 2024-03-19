import React from "react";
import "./Navbar.css";
import { FaAngleDown } from "react-icons/fa";

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
          <li className="mr-16 dropdown">
            <div className="flex items-center">
              {" "}
              {/* Container for TOURS and FaAngleDown */}
              <span>TOURS</span> {/* TOURS text */}
              <FaAngleDown className="ml-1" /> {/* FaAngleDown icon */}
            </div>
            <ul className="dropdown-content">
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Gilgit Baltistan Blossom Tour
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Hunza Blossom Tour
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Gilgit Baltistan Autumn Tour
                </a>
              </li>

              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Autumn Tour Ghizer
                </a>
              </li>

              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Hunza Autumn Tour
                </a>
              </li>
            </ul>
          </li>
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
