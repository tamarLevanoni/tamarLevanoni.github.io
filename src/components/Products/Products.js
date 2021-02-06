import React from "react";
import Product from "../Product/Product.js";
import SaleCountDown from "../SaleCountDown/SaleCountDown.js";
import PropTypes from "prop-types";

class Products extends React.Component {
  state = { isSale: false };
  setSale = (isSale) => this.setState({ isSale });
  render() {
    let filterProduts;
    if (this.props.category === "all") {
      filterProduts = this.props.products;
    } else {
      filterProduts = this.props.products.filter(({ category }) => category === this.props.category);
    }
    const cards = filterProduts.map(({ id, image, title, price }) => (
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

Products.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
};
export default Products;
