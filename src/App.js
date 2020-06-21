import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import "./App.css";
import About from "./About";
import NavBar from "./NavBar";


function App() {
    return (
        <Router>
            <NavBar />

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/projects">
                    <Projects userName="JusGrimes"/>
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
