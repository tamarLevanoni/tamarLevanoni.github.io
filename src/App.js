import "./App.css";
import Products from "./components/Products/Products.js";
import Header from "./components/Header/Header.js";
import React from "react";

class App extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    this.setState({ products });
  }

  render() {
    return (
      <div>
        <Header />
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
