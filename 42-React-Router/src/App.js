import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PaintingsContainer from "./components/PaintingsContainer";
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  <Router >
    <div className="App">
      <Navbar />
      <PaintingsContainer />
    </div>
  </Router >
)

export default App
