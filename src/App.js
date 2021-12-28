import "./App.scss";
import react from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";
import Rate from "./components/Rate/Rate";
import About from "./components/About/About";

class App extends react.Component {
  render() {
    return (
      <>
        <Header />
        <Title />

        <Router>
          <Routes>
            <Route exact path="/calc" element={<Rate />} />
            <Route exact path="/" element={<About />} />
          </Routes>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
