import React from "react";
import Navbar from "./Navbar";
import './Home.css';

function Home() {
  return (
    <>
        <Navbar />
      <div className="main">
        <p>This is Home Page</p>
      </div>
    </>
  );
}
export default Home;
