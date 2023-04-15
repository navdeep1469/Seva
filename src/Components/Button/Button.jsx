import React from "react";
import "./style.css";

function Button({ title, style, icon }) {
  return (
    <div
      className='button'
      style={{
        padding: `${style.y}rem ${style.x}rem`,
        backgroundColor: style.backgroundcolor,
        color: style.color,
        borderWidth: style.borderwidth,
        borderColor: style.bordercolor,
        fontWeight: "600",
        fontSize: ".85rem",
      }}
    >
      {icon !== "none" ? icon : ""}
      {title}
    </div>
  );
}

export default Button;
