import React from "react";
import wallpaper from "../../Assets/wallpaper.jpg";

const Wallpaper = () => {
  return (
    <div className="mt-3 mb-32">
      <img src={wallpaper} alt="image" className="w-full" style={{ height: "550px",}} />
    </div>
  );
};

export default Wallpaper;
