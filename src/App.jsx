import { useState } from "react";
import "./App.css";
import Header from "./Header";
import JazzInfo from "./JazzInfo";
import JazzLegends from "./JazzLegends";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <JazzInfo />
      <JazzLegends />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
