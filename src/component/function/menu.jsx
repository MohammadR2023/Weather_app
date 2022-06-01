import React from "react";
import "./menu.css";
import Search from "./search";
import Data from "../class/data";
import City from "./context";
import { useState } from "react";

const Menu = () => {
  let [weather, setweather] = useState({});
  return (
    <>
      <div className="menu"></div>
      <div className="menu1">
        <City.Provider value={{ convert }}>
          <Search />
          <Data name={weather} />
        </City.Provider>
      </div>
    </>
  );
  function convert(nameCity) {
    console.log(nameCity);
    setweather(nameCity);
  }
};

export default Menu;
