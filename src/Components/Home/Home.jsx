import React from "react";
import Navbar from "../Navbar/Navbar";
import MyProfile from "./Column1/MyProfile/MyProfile";
import SideNav from "./Column1/SideNav/SideNav";
import Invitations from "./Column1/Invitations/Invitations";
import Thoughts from "./Column2/Thoughts/Thoughts";
import Post from "./Column2/Posts/Post";
import Requests from "./Column3/Requests/Requests";
import Contacts from "./Column3/Contacts/Contacts";
import "./style.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className='homeBody'>
        <div className='homeCol1'>
          <MyProfile />
          <SideNav />
          <Invitations />
        </div>
        <div className='homeCol2'>
          <Thoughts />
          <Post />
          {/* <Post />
          <Post />
          <Post />
          <Post /> */}
        </div>
        <div className='homeCol3'>
          <Requests />
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default Home;
