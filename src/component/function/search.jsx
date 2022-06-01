import React, { useRef } from "react";
import { useContext } from "react";
import City from "./context";
import { BsSearch } from "react-icons/bs";
import "./menu.css";

const Search = () => {
  const Data = useContext(City);
  let input = useRef();
  return (
    <div className="search">
      <input
        ref={input}
        type="search"
        name=""
        id=""
        placeholder="City Name..."
      />
      <BsSearch onClick={getValue} className="searchbtn" />
    </div>
  );
  function getValue() {
    console.log(input.current.value);
    Data.convert(input.current.value);
  }
};

export default Search;
