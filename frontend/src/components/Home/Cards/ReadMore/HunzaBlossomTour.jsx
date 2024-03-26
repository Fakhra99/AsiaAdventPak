import React from "react";

function HunzaBlossomTour() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-bold">
            Rush Lake Trek
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
                <b>Rush Lake</b> is situated in hopar valley of district Nagar.
                Rush lake Trek is one of the most recommended treks for those
                who want to have a first time trekking experience with lifelong
                excitement. We walk on glaciers, through villages to a look at
                the real life of those living at footsteps of mighty glaciers,
                along the irrigated terraced fields with the impressive view of
                the mighty Karakorum Mountains from the summit of Rush Peak
                5098m.
              </div>
              <div className="leading-relaxed mb-4">
                It is the junction of two famous glaciers of Barpu and Bualter.
                It is interesting that local legends talk about the gender of
                these glaciers of being male and female and also about their
                meeting and the birth of the new glaciers. Our trek starts at
                Hoper, a marvelous valley with green fields and fruit orchards
                which is also famous for its potato seeds which are exported to
                other parts of Pakistan especially in <b> Northern Areas.</b> If
                you have enough skill you can climb Push Peak.
              </div>
            </div>
            <div className="pl-5 sm:w-full lg:w-1/2 ml-auto -mt-44">
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
            <div className="lg:pl-4 sm:w-full sm:pr-5 lg:w-1/2 ml-auto -mt-44">
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
                src="https://www.asiaadventurepakistan.com/wp-content/uploads/2023/02/hunza-spring-apricot-blossom.jpg"
                alt="stats"
              />
            </div>
            <div className=" sm:w-1/3 overflow-hidden mt-5 sm:mt-0 lg:w-full ">
              <img
                className="object-cover object-right mt-5"
                src="https://www.asiaadventurepakistan.com/wp-content/uploads/2023/02/hunza-blossom-tour.jpg"
                alt="stats"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="lg:leading-10 text-xl container mx-auto sm:px-0 lg:-mt-56 px-6">
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
            <b className="text-gray-600">Day-02:</b> Islamabad- Chilas
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-03:</b>Chilas- Karimabad
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-04:</b> Karimabad- Hopper-
            Barichokore
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-05:</b> arichokore- Chidin Harai
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-06:</b>Chidin Harai- Rash Lake
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-07:</b> Free day
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-08:</b>Rash Lake- Phyphary- Hamdar
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-9:</b> Hamdar- Hopper- Karimabad
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-10:</b>Excursion to Khunjerab pass
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-11:</b>arimabad- Naran
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-12:</b> Naran- Islamabad
          </p>
          <p className="md:ml-0 text-gray-600">
            <b className="text-gray-600">Day-13:</b> Fly back
          </p>
        </div>
      </section>
    </>
  );
}

export default HunzaBlossomTour;
