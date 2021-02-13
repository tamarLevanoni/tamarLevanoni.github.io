import React, { useState, useEffect } from "react";
import Product from "../Product/Product.js";
import SaleCountDown from "../SaleCountDown/SaleCountDown.js";
import PropTypes from "prop-types";
import "./Products.css";

const Products = (props) => {
  const [isSale, setIsSale] = useState(true);
  const setSale = (isSaleNow) => 
  setIsSale(isSaleNow);
  let filterProduts;
  if (props.currentCategory === "all") {
    filterProduts = props.products;
  } else {
    filterProduts = props.products.filter(({ category }) => category === props.currentCategory);
  }
  const cards = filterProduts.map(({ id, image, title, price }) => (
    <Product key={id} srcImg={image} title={title} price={price} isSale={isSale} />
  ));
  return (
    <section className="products">
      <SaleCountDown setSale={setSale} />
      {cards}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
};
export default Products;
