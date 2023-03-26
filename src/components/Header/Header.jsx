import React from "react";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <>
      <div className="bg-black px-20 h-20 flex justify-between items-center">
        <img src={logo} alt="" />
        <div className="text-white flex gap-5 font-bold">
          <a className="hover:text-orange-400" href="/shop">
            Shop
          </a>
          <a className="hover:text-orange-400" href="/order">
            Orders
          </a>
          <a className="hover:text-orange-400" href="/inventory">
            Manage Inventory
          </a>
          <a className="hover:text-orange-400" href="/login">
            Login
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
