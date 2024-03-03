import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" flex text-white items-center justify-between h-[50px] md:h-[70px] bg-gray-700 w-full md:px-16 p-4 py-3 ">
      <Link to="/">
        <h2 className=" text-2xl md:text-4xl">Omid Online</h2>
      </Link>
      <div>
        <Link to="/cart">
          <div className=" flex gap-3 items-center">
            <FaShoppingBag size={30} />
            <span className=" text-xl md:text-3xl w-10 h-10 bg-yellow-400 text-gray-500 rounded-full flex items-center justify-center ">
              3
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
