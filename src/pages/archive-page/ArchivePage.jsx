import React from "react";
import Footer from "../../common/Footer";
import Header from "../../common/Header";

import "../home-page/HomePage.css";
import ArchiveAside from "./ArchiveAside";
import ArchiveMain from "./ArchiveMain";
export default function ArchivePage() {
  return (
    <div class="typora-container">
      <Header />
      <ArchiveAside />
      <ArchiveMain />
      <Footer />
    </div>
  );
}
