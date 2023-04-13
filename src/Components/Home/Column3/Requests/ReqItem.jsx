import React from "react";
import "./style.css";
import theme from "../../../../theme";
import Button from "../../../Button/Button";

function ReqItem() {
  return (
    <div className='container'>
      <div className='reqName'>
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
      <div className='buttons'>
        <Button title={"Accept"} x={2.5} y={0.65} />
        <Button title={"Decline"} x={2.5} y={0.65} />
      </div>
    </div>
  );
}

export default ReqItem;
