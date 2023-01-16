import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Palindrom from "./components/Palindrom";
import BubbleSort from "./components/BubbleSort";
import Home from "./components/Home";
import Stack from "./components/Stack";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/palindrom" element={<Palindrom />} />
            <Route path="/bubble" element={<BubbleSort />} />
            <Route path="/stack" element={<Stack />} />
          </Routes>
          <Outlet />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
