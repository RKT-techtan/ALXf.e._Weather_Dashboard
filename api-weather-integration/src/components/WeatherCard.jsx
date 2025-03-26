import React from "react";

function WeatherCard() {

 return (
   <div>
    <header className=" text-center py-4 "> <h1 className="text-black text-6xl font-bold "> Weather Sheet </h1> </header>
    <div className=" flex items-center bottom-7 py-8 space-y-4 flex-col ">
      <a href="/" className=" relative top-60 bg-red-900 text-white space-x-6 text-2xl py-2 px-11 hover:bg-black rounded-2xl md:right-36 ">Sign In</a>
      </div>
      <div className=" relative flex items-center py-8 space-y-4 flex-col md:bottom-24 md:left-16 ">
        <a href="/" className=" relative top-56 bg-red-900 text-white text-2xl py-2 px-12 hover:bg-black rounded-2xl ">Log In</a>
        </div>
        <footer className="text-right top-64 relative ">
          <p className="text-xs">Copyright ©WeatherSheet 2025, All rights reserved.</p>
          </footer>
          </div>
          );
        }

export default WeatherCard;