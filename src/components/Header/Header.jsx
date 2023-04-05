import React from "react";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="bg-black px-20 h-20 flex justify-between items-center">
        <img src={logo} alt="" />
        <div className="text-white flex gap-5 font-bold">
          <Link className="hover:text-orange-400" to="/">
            Shop
          </Link>
          <Link className="hover:text-orange-400" to="/orders">
            Orders
          </Link>
          <Link className="hover:text-orange-400" to="/inventory">
            Inventory
          </Link>
          <Link className="hover:text-orange-400" to="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
