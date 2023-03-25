import React from "react";
import "./style.css";

function MyProfile() {
  return (
    <div className='profileCard' style={{ backgroundColor: "white" }}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebD98JGg6cQtBCPU4YMliViLu3B7wt2Oodw&usqp=CAU'
        alt=''
        className='profilePic'
      />
      <div className='name'>
        <p>Alexandra Broke</p>
        <p>@alexsunshine</p>
      </div>
    </div>
  );
}

export default MyProfile;
