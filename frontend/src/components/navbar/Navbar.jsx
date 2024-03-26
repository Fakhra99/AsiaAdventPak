import React from "react";
import "./Navbar.css";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex mt-3">
      <Link to="/">
        <img
          src="https://www.asiaadventurepakistan.com/wp-content/uploads/2023/03/asiaadventurepakistan.jpg"
          alt="travel and tour"
          className="ml-10 w-64 h-20"
        />
      </Link>
      <div className="font-semibold flex">
        <ul className="flex ml-20 mt-8 text-sm cursor-pointer">
          <li className="mr-14 whitespace-nowrap">
            <Link to="/"> HOME </Link>
          </li>
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

          {/* <li className="mr-14 whitespace-nowrap">
            <div className="flex items-center">
              <span>TREKS</span> <FaAngleDown />
            </div>
            
          </li> */}
          <li className="mr-14 dropdown whitespace-nowrap">
            <div className="flex items-center">
              <span>TREK</span>
              <FaAngleDown className="ml-1" />
            </div>
            <ul className="dropdown-content">
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Diran Peak Trek
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Hunza Batura Trek
                </a>
              </li>

              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Hunza Patundas Trek
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  K2 Base camp and Concordia Trek
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  K2 Base camp and Gondogoro La Trek
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Rakaposhi Base Camp Trek
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Rush Lake Trek
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Shimshal Pass Trek
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Snow Lake Trek
                </a>
              </li>
            </ul>
          </li>

          <li className="mr-14 dropdown whitespace-nowrap">
            <div className="flex items-center">
              <span>CULTURAL TOURS</span>
              <FaAngleDown className="ml-1" />
            </div>
            <ul className="dropdown-content">
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Uchal Tour Festival Kalash
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Shandur Polo Festival
                </a>
              </li>

              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Chilam Joshi Festival
                </a>
              </li>
            </ul>
          </li>
          <li className="mr-14 dropdown whitespace-nowrap">
            <div className="flex items-center">
              <span>JEEP SAFARI TOURS</span>
              <FaAngleDown className="ml-1" />
            </div>
            <ul className="dropdown-content">
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Deosai Jeep Safari Tour
                </a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  Kalash Valley Jeep Safari Tour
                </a>
              </li>

              <li className="py-2 px-4 hover:bg-gray-800">
                <a href="#" className="text-white">
                  North Pakistan Jeep Safari
                </a>
              </li>
            </ul>
          </li>
          <li className="mr-14 whitespace-nowrap">CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
