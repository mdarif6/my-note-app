import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import "../home-page/HomePage.css";
import LabelAside from "./LabelAside";
import LabelMain from "./LabelMain";
export default function LabelPage() {
  return (
    <div className="typora-container">
      <Header />
      <LabelAside />
      <LabelMain />
      <Footer />
    </div>
  );
}
