import "./Home.css";
import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import ThemeContext from "../../context";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("all");

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
  // async function fetchData() {
  //   const response = await fetch("https://fakestoreapi.com/products");
  //   const products = await response.json();
  //   setProducts(products);
  // }

  const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});

  const categories = Object.keys(groupBy(products, "category"));
  const prices = Object.keys(groupBy(products, "price"));
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  return (
    <>
      <ThemeContext.Provider value={[maxPrice, minPrice]}>
        <Header categories={categories} setCategory={setCategory} />
      </ThemeContext.Provider>
      <Products products={products} currentCategory={currentCategory} />
    </>
  );
};
export default Home;
