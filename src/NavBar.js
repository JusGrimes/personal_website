import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-logo">
                    Justin Grimes
                </div>
                <div className="link-container">
                    <div className="nav-links">
                        <NavLink className="nav-link" exact to="/">Home</NavLink>
                        <NavLink className="nav-link" exact to="/about">About</NavLink>
                        <NavLink className="nav-link" exact to="/projects">Projects</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;