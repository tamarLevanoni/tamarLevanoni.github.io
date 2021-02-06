import "./App.css";
import Products from "./components/Products/Products.js";
import Header from "./components/Header/Header.js";
import React from "react";

class App extends React.Component {
  state = {
    products: [],
    category: "all",
  };
  setCategory = (category) => {
    this.setState({ category });
  };
  async componentDidMount() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    this.setState({ products });
  }

  render() {
    return (
      <div>
        <Header products={this.state.products} setCategory={this.setCategory}/>
        <Products products={this.state.products} category={this.state.category}/>
      </div>
    );
  }
}

export default App;
