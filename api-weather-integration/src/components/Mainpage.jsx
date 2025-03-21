import { useState, useEffect, useCallback } from "react";
import React from "react";
import { Component } from "react";

function Mainpage() {
    return (
        <div className=" mt-0 ">

            <div className="bg-slate-400 w-5s rounded-2xl h-96 ">
            <h1 className="text-black text-6xl text-7xl ">Weather sheet</h1>
            <div>
            <button className=" bg-red-500 top-11 w-40 text-align relative top-2 ">Log In</button>
            </div>
            <div>
            <button className="bg-red-500 w-40 top-12 relative top-3.5 ">Sign In</button>
            </div>
        <footer></footer>
        </div>
        </div>
    );
}

export default Mainpage;
