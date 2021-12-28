import React from "react";
import "./Rate.scss";

import Calc from "../Calc/Calc";

let s = 0; // проверка получения данных с апи, для монтирования колькулятора, кастыль
class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      currencyRate: {},
    };
    this.currency = ["USD", "RUB", "CAD", "UAH"];
    this.getRate();
  }
  // получаем курс валют
  getRate = () => {
    fetch(
      "http://api.exchangeratesapi.io/v1/latest?access_key=83a3fa1837ae651979b1909d3a07eed6&format=1"
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        // сравниваем из списка this.currency и дёргам валюты по ключям
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        s++; //кастыль
        this.setState({
          date: data.date,
          currencyRate: result,
        });
      });
  };

  render() {
    return (
      <>
        <div className="Rate">
          <h3>Курс валют на {this.state.date}</h3>
          <div className="Rate__wrapp">
            {Object.keys(this.state.currencyRate).map((keyName, i) => {
              return (
                <div className="Rate__item" key={keyName}>
                  <div className="currency-name">{keyName}</div>
                  <div className="currency-in">
                    {this.state.currencyRate[keyName].toFixed(2)}*
                  </div>
                  <div className="currency-out">Можно купить за 1 EUR*</div>
                </div>
              );
            })}
            ;
          </div>
        </div>
        {s > 0 ? ( //кастыль
          <Calc rate={this.state.currencyRate} currency={this.currency} />
        ) : (
          <div className="warning">Ждём получения данных(</div>
        )}
      </>
    );
  }
}
export default Rate;
