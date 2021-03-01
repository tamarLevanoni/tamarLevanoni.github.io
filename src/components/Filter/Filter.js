import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Slider } from "antd";
import "./Filter.css";
import { MinMaxPricesContext } from "../../contexts/context";

const Filter = ({ setSelectedPrices, setCategory, categories }) => {
  const prices = useContext(MinMaxPricesContext);
  const [maxPrice, minPrice] = [Number(prices[0]), Number(prices[1])];


  const marks = {
    [minPrice]: `${minPrice}$`,
    [maxPrice]: `${maxPrice}$`,
  };

  const try1 = (value) => {
    console.log(value);
  };

  return (
    <>
      <div className="collection-sort">
        <label>Filter by:</label>
        <select
          onChange={(e) => {
            setCategory(e.target.value);
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
      <div className="slider">
        <Slider
          range
          marks={marks}
          defaultValue={[minPrice, maxPrice]}
          min={minPrice}
          max={maxPrice}
          onAfterChange={(value) => setSelectedPrices(value)}
          onChange={(value) => try1(value)}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  products: PropTypes.array,
  setCategory: PropTypes.func,
};
export default Filter;
