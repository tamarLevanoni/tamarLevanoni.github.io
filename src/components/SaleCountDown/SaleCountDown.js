import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./SaleCountDown.css";

const SaleCountDown = (props) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [isSale, setIsSale] = useState(true);
  let intervalRef = useRef();

  const fixNum = function (num) {
    if (Number(num) < 10) {
      return "0" + num;
    }
    return num;
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (seconds === 0) {
        setSeconds(59);
        setMinutes((prev) => prev - 1);
      } else {
        setSeconds((prev) => prev - 1);
      }
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [seconds]);

  useEffect(() => {
    setTimeout(() => {
      clearInterval(intervalRef.current);
      props.setSale(false);
      setIsSale(false);
    }, 10000);
    
  }, [props]);
  return (
    <div className="saleCountDown">
      {isSale ? `${fixNum(minutes)}:${fixNum(seconds)} minutes to the end of sale` : "End of sale"}
    </div>
  );
};
SaleCountDown.propTypes = {
  setSale: PropTypes.func,
};
export default SaleCountDown;
