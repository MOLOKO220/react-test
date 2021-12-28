import React from "react";
import "./style.scss";
import logo from "./img/Logo.svg";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__content">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <div>
            <div>123456, Санкт-Петербург, Невский пр-кт 127</div>
            <div>sales@log.ru</div>
          </div>
          <div>
            <div>+7 (812) 344-56-65</div>
            <div>+7 (812) 344-56-65</div>
          </div>
          <div>Разработано - D-E-N.ru</div>
        </div>
      </div>
    );
  }
}
export default Footer;
