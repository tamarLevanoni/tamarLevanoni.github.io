import "./Home.css";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import { MinMaxPricesContext } from "../../contexts/context";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [selectedPrices, setSelectedPrices] = useState([]);

  let minPrice = 0;
  let maxPrice = 1000;
  const setCategory = (currentCategory) => {
    setCurrentCategory(currentCategory);
  };
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch("http://127.0.0.1:8000/products");
    const products = await response.json();
    setProducts(products);
  }

  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});
    const categories = Object.keys(groupBy(products, "category"));
    const prices = Object.keys(groupBy(products, "price"));
    if (products.length > 0) {
    maxPrice = Math.max(...prices);
    minPrice = Math.min(...prices);
  }

  useEffect(() => {
    setSelectedPrices([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);
  return (
    <>
      <MinMaxPricesContext.Provider value={[maxPrice, minPrice]}>
        <Header categories={categories} setCategory={setCategory} setSelectedPrices={setSelectedPrices} />
      </MinMaxPricesContext.Provider>
      <Products
        products={products}
        currentCategory={currentCategory}
        minPrice={selectedPrices[0]}
        maxPrice={selectedPrices[1]}
      />
    </>
  );
};
export default Home;
