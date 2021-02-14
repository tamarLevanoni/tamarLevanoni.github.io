import React, { useState, useEffect } from "react";
import saleStamp from "./sale-stamp.png";
import PropTypes from "prop-types";
import "./Product.css";
const Product = (props) => {
  const { srcImg, title, price, isSale } = props;

  return (
    <div className="product-card" >
      {isSale&&price<100&&<img className="saleStamp" src={saleStamp} alt="sale"/>}
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
