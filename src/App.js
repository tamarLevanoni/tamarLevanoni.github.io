import "./App.css";
import Products from "./components/Products/Products.js";
import Header from "./components/Header/Header.js";
import React, { useState, useEffect } from "react";

const App = () => {
 const [products, setProducts] = useState([]);
 const  [currentCategory, setCurrentCategory] = useState("all");

  const setCategory = (currentCategory) => {
    setCurrentCategory(currentCategory);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setProducts(products);
    }
    fetchData();
  }, []);

  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  const categories = Object.keys(groupBy(products, "category"));
  return (
    <>
      <Header categories={categories} setCategory={setCategory} />
      <Products products={products} currentCategory={currentCategory} />
    </>
  );
};

export default App;
