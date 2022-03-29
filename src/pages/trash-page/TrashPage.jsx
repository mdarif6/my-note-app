import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import TrashAside from "./TrashAside";
import TrashMain from "./TrashMain";

export default function TrashPage() {
  return (
    <div className="typora-container">
      <Header />
      <TrashAside />
      <TrashMain />
      <Footer />
    </div>
  );
}
