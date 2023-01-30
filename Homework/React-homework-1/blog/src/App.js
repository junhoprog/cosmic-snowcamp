import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Information from "./information";
import Introduction from "./introduction";
import Work from "./work";
import Writing from "./writing";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Information />
      <Introduction />
      <Work />
      <Writing />
    </div>
  );
};

export default App;
