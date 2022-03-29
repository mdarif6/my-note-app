import React from "react";
import Header from "../../common/Header";
import Aside from "./Aside";
import Main from "./Main";
import Footer from "../../common/Footer";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="typora-container">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}
