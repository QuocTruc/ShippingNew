import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";

import { connect } from "react-redux";
// import { ToastContainer, toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
const onRestart = () => window.location.reload();

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoadingCheckOut, setIsLoadingCheckOut] = useState(false);
  // function handleCheckOut() {
  //   setIsLoadingCheckOut(true);
  //   setTimeout(() => {
  //     toast.info("Checkout successfully");
  //     // eslint-disable-next-line no-undef
  //     dispatch(resetCart(""));
  //   }, 1300);
  // }

  // const handleClick = (e) => {
  //   toast("Do you want to purchase ?");
  // };
  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
  const notify = () => toast("Here is your toast.");
  return (
    <>
      <div className="lg:col-span-12 my-px">
        <div className="p-3 bg-slate shadow-lg w-full rounded-lg">
          <div className="w-full text-center font-semibold">
            My Shopping Cart
          </div>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.cart__items}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className={styles.cart__summary}>
          <h4 className="text-lg font-medium">Order Info</h4>
          <div className="flex items-center justify-between">
            {/* <span>TOTAL: ({totalItems} items)</span> */}
            <p className="font-light text-gray-700">Subtotal:</p>

            <span className="font-normal">
              $ {totalPrice.toLocaleString("en-US")}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-light text-gray-700">Shipping Cost:</p>
            <p className="font-normal">$ 10</p>
          </div>
          <span>
            TOTAL: $ {totalPrice.toLocaleString("en-US")}
            <div className="text-center text-red-500">
              Remember to add 10$ Thanks
            </div>
          </span>

          {/* <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button> */}

          <div className="col-span-12">
            <button
              type="button"
              onClick={onRestart}
              className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-blue-500 text-white hover:bg-blue-400 false w-full"
            >
              Checkout
            </button>
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

export default connect(mapStateToProps)(Cart);
