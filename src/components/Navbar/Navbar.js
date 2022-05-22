import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (

    <>
      <div className="bg-red shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-8 w-1/3">
              <Link
                className=" text-gray-500 hover:text-black inline-block text-lg font-normal relative  font-semibold active-link active:text-yellow-500"
                to="/"
              >
                Home
              </Link>

              <Link
                className="text-gray-500 hover:text-black inline-block text-lg font-normal relative active:text-pink-500"
                to="/products"
              >
                Products
              </Link>
              <Link
                className="text-gray-500 hover:text-black inline-block text-lg font-normal relative active:text-blue-500"
                to="/reviews"
              >
                Reviews
              </Link>
            </div>
            <div className="w-1/3">
              <h2 className="text-2xl text-blue-500 font-bold text-center">
                For a beautiful skin
              </h2>
            </div>
            <div className="w-1/3">
              <div className="flex items-center justify-end">
                <div
                  className="rounded-full relative flex items-center justify-center text-2xl
    w-10 h-10
    text-blue-500
    cursor-pointer"
                >
                  <Link to="/cart">
                    <AiOutlineShoppingCart />
                    <div
                      className="h-6 w-6
        rounded-full absolute -right-3 -top-2 text-xs bg-red-500 text-white flex items-center justify-center"
                    >
                      {cartCount}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
