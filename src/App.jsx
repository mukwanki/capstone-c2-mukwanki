import "./App.css";
import Home from "./components/home";
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import Aos from "aos";
import Service from "./components/service";
import Banner from "./components/banner";
import Footer from "./components/footer";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <>
      <div className="overflox-x-hidden">
        <Home />
        <Service />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default App;
