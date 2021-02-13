import React from "react";
import PropTypes from "prop-types";
class Filter extends React.Component {
  render() {

    return (
      <div className="collection-sort">
        <label>Filter by:</label>
        <select
          onChange={(e) => {
            this.props.setCategory(e.target.value);
          }}
        >
          <option value="all">All Products</option>
          {this.props.categories.map((option, index) => (
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
