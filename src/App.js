import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

import "../App.css";
import RestauranrMenu from "../components/RestauranrMenu";

const App = () => {
  return (
    <div className="appWidHei">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/restaurant/:id" element={<RestauranrMenu />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=280216&catalog_qa=undefined&submitAction=ENTER
