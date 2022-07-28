import { useState } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainter";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="w-content h-content grid rounded shadow-content overflow-hidden grid-rows-row-item grid-cols-column-item ">
      <Header />
      <Nav />
      <MainContainer />
    </div>
  );
}

export default App;
