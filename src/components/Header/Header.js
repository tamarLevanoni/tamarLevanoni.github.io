import React from "react";
import Filter from "../Filter/Filter.js";
import PropTypes from "prop-types";
import "./Header.css"

class Header extends React.Component {
  render() {
    return (
      <nav className="product-filter">
        <h1>Products</h1>
        <div className="sort">
          <Filter products={this.props.products} setCategory={this.props.setCategory} />

          <div className="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  products: PropTypes.array,
  setCategory: PropTypes.func,
};
export default Header;
