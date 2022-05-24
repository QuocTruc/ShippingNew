import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.image}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <p className="text-2xl font-bold text-pink-500 ">{current.title}</p>
        <p className="text-x font-sans">{current.description}</p>
        <p className="text-2xl font-bold ">$ {current.price}</p>

        <button
          onClick={() => addToCart(current.id)}
          className="bg-cyan-300 rounded-md w-96 h-11 text-black hover:bg-sky-700 hover:text-white  "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
