import React from "react";
import { useState } from "react";

function SearchBar() {
  const [formData, setFormData] = useState({});

  const handlechange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <header className=" text-center py-4 "> <h1 className="text-black text-6xl font-bold "> Weather Sheet </h1> </header>
      <input
      type="text"
      name="City"
      placeholder="Search City........."
      onChange={handlechange}
      className=" flex flex-col relative text-center left-16 top-50 bg-red-900 text-white space-x-6 text-2xl py-2 px-11 hover:bg-black md:flex-auto rounded-2xl md:left-80 md:top-0 "
      ></input>
      <button type="submit" className=" relative left-44 top-3 bg-red-900 text-white space-x-6 text-2xl py-2 px-1 hover:bg-black rounded-2xl md:text-xl md:right-10 md:top-0 md:left-80 ">SEARCH</button>

        <footer className="text-right top-80 relative ">
          <p className="text-xs">Copyright ©WeatherSheet 2025, All rights reserved.</p>
        </footer>
      </div>
  );
}
export default SearchBar;