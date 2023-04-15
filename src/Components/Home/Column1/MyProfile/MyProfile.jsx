import React from "react";
import "./style.css";
import theme from "../../../../theme";

function MyProfile() {
  return (
    <div
      className='profileCard'
      style={{ backgroundColor: "white", color: theme.headlines }}
    >
      <img
        alt=''
        src='https://images.news9live.com/h-upload/2022/07/02/448078-sidhu.jpg?w=663'
        width={"25%"}
        style={{ borderRadius: 15 }}
      />
      <div className='name'>
        <p style={{ margin: 0, fontWeight: "700", color: theme.headlines }}>
          Alexandra Broke
        </p>
        <p style={{ margin: 0, color: theme.para }}>@alexsunshine</p>
      </div>
    </div>
  );
}

export default MyProfile;
