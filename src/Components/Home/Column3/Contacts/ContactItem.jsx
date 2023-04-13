import React from "react";

function ContactItem({ name, img }) {
  return (
    <div className='itemHover'>
      <div className='itemContainer'>
        <div style={{ width: "18%" }}>
          <img src={img} alt='' width={"100%"} />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default ContactItem;
