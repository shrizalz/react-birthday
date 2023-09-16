import React, { useRef, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  
  return (
      <div className="App">
        <Header />
        <About />
        {/* 
        <Footer data={this.state.resumeData.main} /> */}
      </div>
    );

}

export default App;
