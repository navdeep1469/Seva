import React from "react";

function ContactItem({ name, img }) {
  return (
    <div className='contactItemHover'>
      <div className='contactItemContainer'>
        <div style={{ width: "18%", marginRight: "1rem" }}>
          <img src={img} alt='' width={"100%"} />
        </div>
        <span>{name}</span>
      </div>
    </div>
  );
}

export default ContactItem;
