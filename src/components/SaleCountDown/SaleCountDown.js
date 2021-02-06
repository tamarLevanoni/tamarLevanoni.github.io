import React from "react";
class SaleCountDown extends React.Component {
  state = {
    minutes: 0,
    seconds: 10,
    isSale: true,
  };
  fixNum = function (num) {
    if (Number(num) < 10) {
      return "0" + num;
    }
    return num;
  };
  timeOut = setTimeout(() => {
    clearInterval(this.intervalId);
    this.props.setSale(false);
    this.setState({ isSale: false });
  }, 10000);
  intervalId = setInterval(() => {
    let { minutes, seconds } = { ...this.state };
    if (seconds === 0) {
      seconds = 59;
      minutes = minutes - 1;
    } else {
      seconds -= 1;
    }
    this.setState({ minutes, seconds });
  }, 1000);

  componentDidMount() {
    this.props.setSale(true);
  }

  render() {
    return (
      <div className="saleCountDown">
        {this.state.isSale
          ? `${this.fixNum(this.state.minutes)}:${this.fixNum(this.state.seconds)} minutes to the end of sale`
          : "End of sale"}
      </div>
    );
  }
}
export default SaleCountDown;
