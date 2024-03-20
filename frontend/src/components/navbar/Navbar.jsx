import React from "react";
import "./Navbar.css";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full flex mt-3">
      <img
        src="https://www.asiaadventurepakistan.com/wp-content/uploads/2023/03/asiaadventurepakistan.jpg"
        alt="travel and tour"
        className="ml-10 w-64 h-20"
      />

      <div className="font-semibold flex">
        <ul className="flex ml-20 mt-8 text-sm cursor-pointer">
          <li className="mr-14 whitespace-nowrap">HOME</li>
          <li className="mr-14 whitespace-nowrap">ABOUT US</li>
          <li className="mr-14 dropdown whitespace-nowrap">
            <div className="flex items-center">
              <span>TOURS</span>
              <FaAngleDown className="ml-1" />
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
                  Autumn Tour Gheizar
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Hunza Autumn Tour
                </a>
              </li>
            </ul>
          </li>

          <li className="mr-14 whitespace-nowrap">
            <div className="flex items-center">
              <span>TREKS</span> <FaAngleDown />
            </div>
          </li>

          <li className="mr-14 whitespace-nowrap">
            <div className="flex items-center">
              <span>CULTURAL TOURS</span> <FaAngleDown />
            </div>
          </li>
          <li className="mr-14 whitespace-nowrap">
            <div className="flex items-center">
              <span>JEEP SAFARI TOURS</span> <FaAngleDown />
            </div>
          </li>
          <li className="mr-14 whitespace-nowrap">CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
