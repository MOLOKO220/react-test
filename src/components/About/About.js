import React from "react";
import "./About.scss";

import img from "./img/r.svg";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="About">
        <div className="About__wrapp">
          <div className="About__contetn">
            <div className="About__contetn-left">
              <div></div>
              <h4>О компании</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                explicabo reprehenderit at, quam eum autem aliquid dolorum?
                Animi, reiciendis? Perferendis quisquam blanditiis sapiente
                facere tempore, architecto molestiae ullam nesciunt
                obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Iusto explicabo reprehenderit at, quam eum autem aliquid
                dolorum? Animi, reiciendis? Perferendis quisquam blanditiis
                sapiente facere tempore, architecto molestiae ullam nesciunt
                obcaecati?Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Iusto explicabo reprehenderit at, quam eum autem aliquid
                dolorum? Animi, reiciendis? Perferendis quisquam blanditiis
                sapiente facere tempore, architecto molestiae ullam nesciunt
                obcaecati?
              </p>
            </div>
            <div className="About__contetn-right">
              <div>
                <h3>48</h3>
                <p>офисов</p>
                <div>В Европе и СНГ</div>
              </div>
              <div>
                <h3>361</h3>
                <p>грузовиков</p>
                <div>Volvo, Scania</div>
              </div>
              <img src={img} />
              <div>
                <h3>1500</h3>
                <p>сотрудников</p>
                <div>профессионалов</div>
              </div>
            </div>
          </div>
          <div className="About__back"></div>
        </div>
      </div>
    );
  }
}
export default About;
