import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footer">
      <Link to="/">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      <Link to="/orange">Green</Link>
      <Link to="/aqua">Aqua</Link>
      <Link to="/white">White</Link>
    </div>
  );
}
