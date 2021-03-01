import React, { useEffect, useState } from "react";
import Product from "../Product/Product.js";
import SaleCountDown from "../SaleCountDown/SaleCountDown.js";
import PropTypes from "prop-types";
import "./Products.css";

const Products = ({ products, currentCategory }) => {
  const [isSale, setIsSale] = useState(true);
  const [filterProduts, setFilterProduts] = useState(products);
  useEffect(() => {
    currentCategory === "all"
      ? setFilterProduts(products)
      : setFilterProduts(products.filter(({ category }) => category === currentCategory));
  }, [currentCategory, products]);

  return (
    <section className="products">
      <SaleCountDown onFinish={setIsSale} />
      {filterProduts.map(({ id, image, title, price }) => (
        <Product key={id} id={id} srcImg={image} title={title} price={price} isSale={isSale && price < 100} />
      ))}
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
};
export default Products;
