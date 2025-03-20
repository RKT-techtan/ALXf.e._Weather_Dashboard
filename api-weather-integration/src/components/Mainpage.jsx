import { useState, useEffect, useCallback } from "react";
import React from "react";
import { Component } from "react";

function Mainpage() {
    return (
        <div className="bg-slate-500">

            <div className="bg-slate-400 rounded-2xl h-96 ">
            <h1 className="text-black text-6xl ">Weather sheet</h1>
            <div>
            <button className=" bg-red-500 w-40 text-align position: relative top-2 ">Log in</button>
            </div>
            <div>
            <button className="bg-red-500 w-40 position: relative top-3.5 ">Sign in</button>
            </div>
        <footer></footer>
        </div>
        </div>
    );
}

export default Mainpage;