import React from "react";
import PropTypes from "prop-types";
class Filter extends React.Component {
  render() {
    const groupBy = (xs, key) =>
      xs.reduce((rv, x) => {
        rv[x[key]] = true || [];
        return rv;
      }, {});

    const products = this.props.products;

    const categories = Object.keys(groupBy(products, "category"));
    return (
      <div className="collection-sort">
        <label>Filter by:</label>
        <select
          onChange={(e) => {
            this.props.setCategory(e.target.value);
          }}
        >
          <option value="all">All Products</option>
          {categories.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
Filter.propTypes = {
  products: PropTypes.array,
  setCategory: PropTypes.func,
};
export default Filter;
