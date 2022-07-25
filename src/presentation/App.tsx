import React, {useEffect, useState} from "react";
import './App.css';
import Navigation from "./navigation/Navigation";
import Main from "./navigation/Main";
import {BrowserRouter} from "react-router-dom";
// component did mount - read list
// component will unmount - write list
const App = ()=>{
    return (
            <>
                {/*<h2>{JSON.stringify(history)}</h2>*/}
                <Navigation/>
                <Main/>
            </>
    );
}

export default App;
