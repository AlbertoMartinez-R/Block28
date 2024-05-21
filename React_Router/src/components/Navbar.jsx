import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar">
            <Link to="/">Home</Link>
            <Link to="/blue" >Blue</Link>
            <Link to="/Red">Red</Link>
            <Link to="/Orange">Orange</Link>
            <Link to="/Aqua">Aqua</Link>
            <Link to="/White">White</Link>
        </div>
    );
}