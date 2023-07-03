import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="cont">
      <div className="left">
        <span>welcome</span>
      </div>
      <div className="right">
        <ul>
          <li>Contact</li>
          <Link to="/about">About</Link>
          <Link to="/contacts"> Contact</Link>
          <Link to="/name">Name</Link>
        </ul>
      </div>
    </div>
  );
}

export default Home;
