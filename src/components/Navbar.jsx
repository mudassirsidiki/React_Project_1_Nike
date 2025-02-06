import React from "react";

const Navbar = () => {
  return (
    <div>

      <nav>
        
        <div className="logo">
          <img src="/images/brand_logo.png" alt="" />
        </div>

        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <button>LOGIN IN</button>

      </nav>

    </div>
  );
};

export default Navbar;
