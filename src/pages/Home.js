import React from "react";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import HeaderImage from "../Bibliotek/rs6.jpeg";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${HeaderImage})` }}>
      <div className="headercontainer">
        <h1>Chelsea Football club</h1>
        <p>London is blue</p>
        <Link to="/tjanster">
          <button>Buy a ticket now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
