import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Product.css";
const Product = (props) => {
  const { srcImg, title, price, isSale } = props;
  // let style = {};
  // if (isSale && price < 100) {
  //   style = { backgroundColor: "#b41329" };
  // } else {
  //   style = { backgroundColor: "#fff" };
  // }
  return (
    <div className="product-card" >
      {isSale&&price<100&&<img src="sale-stamp.png" alt="sale"/>}
      <div className="product-image">
        <img src={srcImg} alt="" />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}$</h6>
      </div>
    </div>
  );
};

Product.propTypes = {
  isSale: PropTypes.bool,
  srcImg: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
