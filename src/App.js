import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";
import Home from "./components/Home";
import Reviews from "./components/Reviews";

function App({ current }) {
  return (
    <Router>
      <div className="app">
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/reviews" element={<Reviews/>}/>

          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          {!current ? (
            // <Navigate  to="/" />
            <Route path="/" element={<Navigate replace to="/" />} />
          ) : (
            // <Route exact path="/" component={Products} />

            <Route path="/product/:id" element={<SingleItem />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
