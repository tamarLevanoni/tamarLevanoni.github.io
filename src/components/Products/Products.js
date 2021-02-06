import React from "react";
import Product from "../Product/Product.js";
import SaleCountDown from "../SaleCountDown/SaleCountDown.js";

class Products extends React.Component {
  state = { isSale: false };
  setSale = (isSale) => this.setState({ isSale });
  render() {
    const cards = this.props.products.map(({ id, image, title, price }) => (
      <Product key={id} srcImg={image} title={title} price={price} isSale={this.state.isSale} />
    ));
    return (
      <section className="products">
        <SaleCountDown setSale={this.setSale} />
        {cards}
      </section>
    );
  }
}
export default Products;
