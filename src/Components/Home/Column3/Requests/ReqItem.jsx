import React from "react";
import "./style.css";
import theme from "../../../../theme";
import Button from "../../../Button/Button";

function ReqItem() {
  const style1 = {
    x: 1.5,
    y: 0.65,
    backgroundcolor: theme.backGroundSecondry,
    color: "white",
    borderWidth: 0,
    bordercolor: "white",
  };
  const style2 = {
    x: 1.5,
    y: 0.65,
    backgroundcolor: "white",
    color: theme.headlines,
    borderWidth: 0.5,
    bordercolor: "black",
  };
  return (
    <div className='reqItemContainer'>
      <div className='reqItemName'>
        <div style={{ width: "20%" }}>
          <img
            src=' https://cdns-images.dzcdn.net/images/artist/d9a8aae39a09cef1b8046c0163ee2a1d/500x500.jpg'
            alt=''
            width={"100%"}
          />
        </div>
        <p
          style={{
            marginLeft: ".85rem",
            color: theme.headlines,
            fontSize: ".85rem",
          }}
        >
          <span style={{ fontWeight: "700" }}>Dilpreet Dhillon</span> wants to
          add you to friends.
        </p>
      </div>
      <div className='reqButtons'>
        <Button title={"Accept"} style={style1} icon={"none"} />
        <Button title={"Decline"} style={style2} icon={"none"} />
      </div>
    </div>
  );
}

export default ReqItem;
