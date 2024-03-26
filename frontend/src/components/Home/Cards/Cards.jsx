import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className="mt-24 px-4">
      <h1 className="font-architects-daughter text-center text-orange-400 md:text-4xl lg:text-1xl xl:text-1xl">
        Make it memorable
      </h1>
      <h1 className="text-center text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold">
        Most Demanding Tours
      </h1>

      {/* cards */}
      <div className="flex justify-between mt-8 mx-10">
        <div className="card">
          <img
            src="https://www.asiaadventurepakistan.com/wp-content/uploads/elementor/thumbs/rush-lake-trek-1-1-qk8k72i6jxo8o6ycxqi7suutc5ww3jh7lc2t6koq00.jpg"
            alt="tour"
            className="rounded-tl-3xl rounded-tr-3xl w-96"
          />
          <div className="card-content w-96">
            <h2 className="font-bold text-xl mt-2 text-blue-500">
              Rush Lake Trek
            </h2>
            <p className="mt-2">
              <span className="font-bold">Rush Lake</span> is situated in hopar
              valley of district Nagar. Rush lake Trek is one of the most
              recommended treks for those who want to have a first time trekking
              experience with lifelong excitement.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-500 text-white py-3 px-6 rounded-full transition-shadow hover:shadow-md">
                <Link to="/rushlake">Read More</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="https://www.asiaadventurepakistan.com/wp-content/uploads/elementor/thumbs/rakaposhi-diran-peak-base-camp-qk8k72i6jxo8o6ycxqi7suutc5ww3jh7lc2t6koq00.jpg"
            alt="tour"
            className="rounded-tl-3xl rounded-tr-3xl w-96"
          />
          <div className="card-content w-96">
            <h2 className="font-bold text-xl mt-2 text-blue-500">
              Rakaposhi Base Camp Trek
            </h2>
            <p className="mt-2">
              <span className="font-bold">Rakaposhi Base Camp trek</span> is
              located in the Minapin Valley of District Nagar. Rakaposhi
              basecamp Trek is also an opportunity to see the local culture of
              the mountain people. There are summer settlements
            </p>
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-500 text-white py-3 px-6 rounded-full transition-shadow hover:shadow-md">
                <Link to="/rpbct"> Read More </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="https://www.asiaadventurepakistan.com/wp-content/uploads/2023/02/hunza-blossom-tour.jpg"
            alt="tour"
            className="rounded-tl-3xl rounded-tr-3xl w-96"
          />
          <div className="card-content w-96">
            <h2 className="font-bold text-xl mt-2 text-blue-500">
              Hunza Blossom Tour
            </h2>
            <p className="mt-2">
              <span className="font-bold">Spring Blossom Tour Hunza </span>
              Valley is a season it is cherry, apricot, apple, pears, peaches,
              and it gives food for the human sole without any interpretation.
              Among the high snow-capped mountains
            </p>
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-500 text-white py-3 px-6 rounded-full transition-shadow hover:shadow-md">
                <Link to="hbt"> Read More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8 mx-10">
        <div className="card">
          <img
            src="https://www.asiaadventurepakistan.com/wp-content/uploads/elementor/thumbs/rush-lake-trek-1-1-qk8k72i6jxo8o6ycxqi7suutc5ww3jh7lc2t6koq00.jpg"
            alt="tour"
            className="rounded-tl-3xl rounded-tr-3xl w-96"
          />
          <div className="card-content">
            <h2 className="font-bold text-xl mt-2 text-blue-500">
              Chilam Joshi Festival
            </h2>
            <p className="mt-2">
              <span className="font-bold">Chilam Joshi festival</span> starts at
              Rumbur valley and then moves on to other valleys of Kalash. In
              this festival, Kalashi people pray for the safeguard of their
              fields and animals before going to their fields and for this
              purpose they used to spread milk on their Gods.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-500 text-white py-3 px-6 rounded-full transition-shadow hover:shadow-md">
                <Link to="/chilamjoshifes"> Read More</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="https://www.asiaadventurepakistan.com/wp-content/uploads/elementor/thumbs/rakaposhi-diran-peak-base-camp-qk8k72i6jxo8o6ycxqi7suutc5ww3jh7lc2t6koq00.jpg"
            alt="tour"
            className="rounded-tl-3xl rounded-tr-3xl w-96"
          />
          <div className="card-content">
            <h2 className="font-bold text-xl mt-2 text-blue-500">
              North Pakistan Jeep Safari
            </h2>
            <p className="mt-2">
              <span className="font-bold">Jeep Safari Tours</span> are a great
              way to explore nature.It is much preferable idea for the people
              who are nature lovers.If you are travelling to{" "}
              <span className="font-bold">northern areas of Pakistan</span> or
              the places that are above the sea level then{" "}
              <span className="font-bold">jeep tour</span> would be a great
              option for you.
            </p>
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-500 text-white py-3 px-6 rounded-full transition-shadow hover:shadow-md">
                <Link to="/djst">Read More </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <img
            src="https://www.asiaadventurepakistan.com/wp-content/uploads/2023/02/Autumn-in-Hopper-and-hunza.jpg"
            alt="tour"
            className="rounded-tl-3xl rounded-tr-3xl w-96"
          />
          <div className="card-content">
            <h2 className="font-bold text-xl mt-2 text-blue-500">
              Gilgit Baltistan Autumn Tour
            </h2>
            <p className="mt-2">
              <span>Gilgit Baltistan</span> has always been a fascinating place
              to visit during the autumn season, with its chilly and crisp
              atmosphere. The four seasons in Pakistan can be closely
              experienced in Gilgit Baltistan. Just like the Blossom season and
              other season Autumn is also famous due it glittering
            </p>
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-500 text-white py-3 px-6 rounded-full transition-shadow hover:shadow-md">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
