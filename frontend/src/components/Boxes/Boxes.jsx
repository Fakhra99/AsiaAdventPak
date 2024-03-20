import React from "react";

const Boxes = () => {
  return (
    <div className="flex justify-between px-16 bg-neutral-100 mt-10 h-56 p-10">
      <div className="box bg-white shadow-md rounded-2xl w-34 p-12 mr-6">
        <span className="font-bold flex">Best Tours</span> A strict screening
        process ensures that we only offer the best tours and trip packages.
      </div>
      <div className="box bg-white shadow-md rounded-2xl w-34 p-12 mr-6">
        <span className="font-bold flex">Best Price</span> We guarantee you the
        best price. Found a lower price? We will match it.
      </div>
      <div className="box bg-white shadow-md rounded-2xl w-34 p-12 mr-6">
        <span className="font-bold flex">Free Cancellation</span> We understand
        how important flexibility is right now, just one click and it's done!
      </div>
    </div>
  );
};

export default Boxes;
