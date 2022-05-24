/* eslint-disable no-unused-vars */
import * as actionTypes from "./shopping-types";
import React, { useEffect, useState } from "react";

import axios from "axios";
// const [product, setProduct] = useState("");

axios.get("http://webcode.me").then((resp) => {
  console.log(resp.data);
});
const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "True Skin Vitamin C",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      price: 23.99,
      image:
        "https://res.cloudinary.com/dyotzt92h/image/upload/v1632673370/Fsoft-academy/favpng_vitamin-c-vitamin-e-serum-skin_s1igc2.png",
    },
    {
      id: 2,
      title: "RBC Serum facial",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      price: 17.99,
      image:
        "https://res.cloudinary.com/dyotzt92h/image/upload/v1632909666/Fsoft-academy/pngwing.com_ixjcnb.png",
    },
    {
      id: 3,
      title: "Aichun beauty",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      price: 24.99,
      image:
        "https://res.cloudinary.com/dyotzt92h/image/upload/v1632909875/Fsoft-academy/c5e83bbc7b60fc7d61da7bc07ec129dd31fc0d9b_original_nxatos.jpg",
    },
    {
      id: 4,
      title: "Organic Seed Oil For Face-Pure",
      description:
        "Joom: Despite any information provided by the seller, this product is not intended",
      price: 24.99,
      image:
        "https://res.cloudinary.com/dyotzt92h/image/upload/v1632911071/Fsoft-academy/e4b65e5be370b47c78a6a1d1d4b9163c5346f588_original_mulnva.jpg",
    },
    {
      id: 5,
      title: "Koji Acid",
      description:
        "Serum for Face, Topical Facial Serum without Hyalutronic Acid & Vitamin E",
      price: 22.99,
      image:
        "https://res.cloudinary.com/dyotzt92h/image/upload/v1632912685/Fsoft-academy/0879bd15d16fae3ef21d182c5f391bf3a25f563d_original_ylhpz7.jpg",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
