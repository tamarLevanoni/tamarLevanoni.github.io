import React from "react";
import PropTypes from "prop-types";
class Product extends React.Component {
  render() {
    const { srcImg, title, price } = this.props;
    let style = {};
    if (this.props.isSale && price < 100) {
      style = { backgroundColor: "#b41329" };
    } else {
      style = { backgroundColor: "#fff" };
    }
    return (
      <div className="product-card" style={style}>
        <div className="product-image">
          <img src={srcImg} alt="" />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}$</h6>
        </div>
      </div>
    );
  }
}
Product.propTypes = {
  isSale: PropTypes.bool,
  srcImg: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
};

export default Product;
