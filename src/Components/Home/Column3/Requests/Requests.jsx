import React from "react";
import theme from "../../../../theme";
import "./style.css";
import ReqItem from "./ReqItem";

function Requests() {
  return (
    <div className='requestContainer'>
      <div
        className='requestHeading'
        style={{
          color: theme.headlines,
        }}
      >
        <span style={{ margin: 0 }}>REQUESTS</span>
        <span className='requestNoti'>4</span>
      </div>
      <ReqItem />
      <ReqItem />
    </div>
  );
}

export default Requests;
