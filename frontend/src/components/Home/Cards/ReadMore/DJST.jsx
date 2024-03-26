import React from "react";

function DJST() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
            Deosai Jeep Safari Tour
          </h1>
        </div>
        <img
          src="https://img.freepik.com/free-photo/standing-top-mountain-peak-success-achieved-generated-by-ai_188544-33348.jpg?w=1060&t=st=1710833523~exp=1710834123~hmac=d613896301ec73e41986f2776401934897bc0faebc3b349e2b4f67daa23d86b7"
          alt="image"
          className="w-full h-[250px] object-cover"
        />
      </div>

      <section className="text-gray-600 body-font mt-5 px-5 lg:px-0">
        <div className="title-font mt-5  text-gray-900  sm:text-5xl md:text-6xl xl: sm:ml-16 text-3xl font-bold md:text-4xl lg:text-3xl xl:ml-96">
          Overview
        </div>
        <div className="mx-0 sm:mx-5 flex flex-wrap">
          <div className="flex flex-wrap w-full sm:w-2/3">
            <div className="w-full sm:p-4">
              <div className="leading-relaxed ">
                <b>Jeep Safari Tours</b> are a great way to explore nature.It is
                much preferable idea for the people who are nature lovers.If you
                are travelling to <b> northern areas </b>of Pakistan or the
                places that are above the sea level then <b>jeep tour</b> would
                be a great option for you.
              </div>
              <div className="leading-relaxed mb-4">
                <b> Amazing North Jeep Safari</b> Trough the great mountain
                ranges of the world (Himalaya, Karakoram & Hindukush)A safari of
                22 days takes you to the Northern Areas of Pakistan, a land with
                welcoming people; a land that homes some of world’s highest
                mountains and longest glaciers also it inhibits some of
                untouched cultures of the world. The tour is a blend of culture,
                history and spectacular views of mountains and experience.
              </div>
              <div className="leading-relaxed mb-4">
                Taxila, Peshawar and <b>Takht-e-Bhai,</b> is a marvelous
                experience of history while from Dir onwards, it is an
                incredible jeep adventure, while at Kalash, Chitral and Hunza we
                experience untouched cultures
              </div>
            </div>
            <div className="pl-5 sm:w-full lg:w-1/2 ml-auto -mt-20">
              <h2 className="title-font font-medium text-2xl text-gray-900">
                Included
              </h2>
              <ul className="list-disc pl-5">
                <li>Transportation</li>
                <li>Pick and Drop Islamabad to Islamabad</li>
                <li>Accommodations</li>
                <li>Professional guide</li>
              </ul>
            </div>
            <div className="lg:pl-4 sm:w-full sm:pr-5 lg:w-1/2 ml-auto -mt-20">
              <h2 className="title-font font-medium text-2xl text-gray-900">
                Not Included
              </h2>
              <ul className="list-disc pl-5">
                <li>Air Tickets</li>
                <li>Entry Fees</li>
              </ul>
            </div>
          </div>
          <div className="pics-section w-full lg:w-1/3 ">
            <div className="bg-orange-500 text-center text-white w-full h-10 font-bold text-3xl">
              Trip Gallery
            </div>
            <div className=" sm:w-1/3 overflow-hidden mt-5 sm:mt-0 lg:w-full ">
              <img
                className="object-cover object-right mt-5"
                src="https://www.asiaadventurepakistan.com/wp-content/uploads/2023/02/deosai-plains-jeep-safari.jpg"
                alt="stats"
              />
            </div>
            <div className=" sm:w-1/3 overflow-hidden mt-5 sm:mt-0 lg:w-full ">
              <img
                className="object-cover object-right mt-5"
                src="https://www.asiaadventurepakistan.com/wp-content/uploads/2023/02/deosai-jeep-safari-tour.jpg"
                alt="stats"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:leading-10 text-xl container mx-auto sm:px-0 lg:-mt-14 px-6">
        <div className="trip ml-0 sm:ml-44">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-3xl xl:text-6xl 2xl:text-7xl ">
            Trip Itinerary
          </h1>
        </div>
        <div className="container ml-0 sm:ml-16 lg:-ml-6">
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-01:</b> Islamabad
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-02:</b>Islamabad-Naran (Kaghan
            Valley)
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-03:</b>Naran-Lake Saif-ul-Maluk
            -Naran
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-04:</b>Naran-Chilas
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-05:</b> Chilas-Fairy Meadows
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-06:</b>Exploration
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-07:</b> Fairy Meadiows-Rama Lake
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-08:</b>Rama Lake-Deosai
            Plateau-Skardu
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-09:</b> Sightseeing in Skardu
          </p>
        </div>
      </section>
    </>
  );
}

export default DJST;
