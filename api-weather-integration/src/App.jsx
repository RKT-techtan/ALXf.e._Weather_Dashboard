import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherCard from "./components/WeatherCard.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path="/" element={<WeatherCard/>}/>
      <Route exact path="/SearchBar" element={<SearchBar/>}/>
      <Route exact path="/Dashboard" element={<Dashboard/>}/>
    </Routes>
  </Router>
  )
};

export default App;