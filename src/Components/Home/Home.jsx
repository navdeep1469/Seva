import React from "react";
import Navbar from "../Navbar/Navbar";
import MyProfile from "./MyProfile";
import SideNav from "./SideNav";
import "./style.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className='homeBody'>
        <div style={{ display: "flex", padding: "2em" }}>
          <div className='homeCol1'>
            <MyProfile />
            <SideNav />
          </div>
          <div className='homeCol2'></div>
          <div className='homeCol3'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
