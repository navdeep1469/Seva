import React from "react";
import "./style.css";
import theme from "../../theme";

function Button({ title, x, y }) {
  return (
    <div
      className='button'
      style={{
        padding: `${y}rem ${x}rem`,
        backgroundColor:
          title === "Accept" ? theme.backGroundSecondry : "white",
        color: title === "Accept" ? "white" : theme.headlines,
        borderWidth: title === "Accept" ? 0 : 0.5,
        borderColor: title === "Accept" ? "white" : "black",

        fontWeight: "600",
        fontSize: ".85rem",
      }}
    >
      {title}
    </div>
  );
}

export default Button;
