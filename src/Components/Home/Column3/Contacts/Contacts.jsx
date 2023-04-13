import React from "react";
import theme from "../../../../theme";
import "./style.css";
import ContactItem from "./ContactItem";
import { data } from "./data";

function Contacts() {
  return (
    <div className='contactContainer'>
      <div
        className='contactHeading'
        style={{
          color: theme.headlines,
        }}
      >
        <span style={{ margin: 0 }}>CONTACTS</span>
        <span className='contactNoti'>4</span>
      </div>
      <div className='contactList'>
        {data.map(({ name, id, img }) => {
          return <ContactItem name={name} img={img} key={id} />;
        })}
      </div>
    </div>
  );
}

export default Contacts;
