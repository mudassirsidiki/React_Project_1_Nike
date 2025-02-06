import React from "react";

const Hero = () => {
  return (
    <div className="hero">

      {/* ************************************************ */}
      <div className="herocontent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="herobutton">
          <button>SHOP NOW</button>
          <button>SHOP CATEGORY</button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
        </div>
        <div className="brandicon">
          <img src="/images/amazon.png" alt="" width={40}  />
          <img src="/images/flipkart.png" alt="" width={40} />
        </div>
      </div>
      {/* ************************************************ */}


      {/* ************************************************ */}
      <div className="heroimage">
        <img src="/images/hero-image.png" alt="" width={600} />
      </div>
      {/* ************************************************ */}


    </div>
  );
};

export default Hero;
