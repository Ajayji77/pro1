import React, { useEffect, useState } from "react";
import food from "../images/food.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Login");
  useEffect(() => {
    console.log("Calling");
  }, [login]);
  const handleLogin = () => {
    login == "Login" ? setLogin("Logout") : setLogin("Login");
  };
  return (
    <div className="cont">
      <div className="contImg">
        <img src={food} alt="food" />
      </div>
      <div className="ulList">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/"}>Cart</Link>
          </li>
          <li>
            <button className="btnStyle" onClick={handleLogin}>
              {login}
            </button>
          </li>
        </ul>

        <ul id="myLinks">
          <li>
            <Link to={"#"}>📊</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
