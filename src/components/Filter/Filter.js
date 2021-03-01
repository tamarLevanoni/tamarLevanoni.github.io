import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Slider } from "antd";
import "./Filter.css";
import ThemeContext from "../../context";

const Filter = (props) => {
  const prices = useContext(ThemeContext);
  const [maxPrice, minPrice] = [Number(prices[0]), Number(prices[1])];

const obj = {}
obj[minPrice] = 10;
obj.minPrice = 10;

  const marks = {
    [minPrice]: `${minPrice}$`,
    [maxPrice]: `${maxPrice}$`,
  };

  return (
    <>
      <div className="collection-sort">
        <label>Filter by:</label>
        <select
          onChange={(e) => {
            props.setCategory(e.target.value);
          }}
        >
          <option value="all">All Products</option>
          {props.categories.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="slider" >
        <Slider range marks={marks} tooltipVisible={true} defaultValue={[minPrice, maxPrice]} min={minPrice} max={maxPrice} />
      </div>
    </>
  );
};

Filter.propTypes = {
  products: PropTypes.array,
  setCategory: PropTypes.func,
};
export default Filter;
