import "./App.css";
import Products from "./components/Products/Products.js";
import Header from "./components/Header/Header.js";
import React from "react";

class App extends React.Component {
  state = {
    products: [],
    currentCategory: "all",
  };
  setCategory = (currentCategory) => {
    this.setState({ currentCategory });
  };
  async componentDidMount() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    this.setState({ products });
  }

  render() {
    const groupBy = (xs, key) =>
    xs.reduce((rv, x) => {
      rv[x[key]] = true || [];
      return rv;
    }, {});


  const categories = Object.keys(groupBy(this.state.products, "category"));
    return (
      <>
        <Header categories={categories} setCategory={this.setCategory}/>
        <Products products={this.state.products} currentCategory={this.state.currentCategory}/>
      </>
    );
  }
}

export default App;
