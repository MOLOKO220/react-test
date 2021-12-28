import React from "react";
import "./Calc.scss";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: props.currency,
      inpValue: 0,
      calcCurrency: props.rate.USD,
      result: 0,
    };
    this.takeCurren = (e) => {
      this.state.calcCurrency = this.props.rate[e.target.value];
      this.calcResult();
    };
    this.calcResult = (e) => {
      let r = this.state.inpValue / this.state.calcCurrency;
      console.log(r);
      this.setState({
        result: r.toFixed(2),
      });
    };
  }

  render() {
    return (
      <div className="Calc">
        <h3>Калькулятор обмена</h3>
        <div className="Calc__wrapp">
          <div>
            <input
              type="number"
              defaultValue="0"
              onChange={(e) => {
                this.state.inpValue = e.target.value;
                this.calcResult();
              }}
            ></input>
            <select onChange={this.takeCurren}>
              {this.props.currency.map((e) => {
                return (
                  <option key={e} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            Результат в EUR: <span>{this.state.result}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Calc;
