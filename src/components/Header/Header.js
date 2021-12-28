import React from "react";
import "./Header.scss";
import logo from "./img/Logo.svg";
import metk from "./img/mark.svg";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__top">
          <div className="header__wrapp">
            <div className="header__leng">
              <div>РУС</div>
            </div>
            <div>8 (800) 123-45-67</div>
            <div>sales@log.ru</div>
          </div>
        </div>
        <div className="header__bottum">
          <div className="header__wrapp">
            <div className="header__logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
              <p className="header__logo-border"></p>
              <div>
                <img src={metk} alt="mark" />
                Наши офисы
              </div>
            </div>
            <nav>
              <a href="react-test/">Главная</a>
              <a href="react-test/calc">калькулятор валют</a>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
