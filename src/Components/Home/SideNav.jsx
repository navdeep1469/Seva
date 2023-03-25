import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io";
import * as BiIcons from "react-icons/bi";

import { Link } from "react-router-dom";
import theme from "../../theme";

const Item = ({ name, icon, source }) => {
  return (
    <Link to={source} style={{ color: theme.headlines }}>
      <div className='itemHover'>
        <div
          className='item'
          style={{
            borderBottom: name === "Logout" ? "none" : ".5px solid #7d9d9c",
            padding: "1rem 0rem",
          }}
        >
          {icon}
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
};

function SideNav() {
  const items = [
    {
      name: "Home",
      icon: <AiIcons.AiFillHome size={22} />,
      source: "/home",
    },
    {
      name: "People",
      icon: <BsIcons.BsPeople size={20} />,
      source: "/myFriends",
    },
    {
      name: "My Feeds",
      icon: <IoIcons.IoMdPhotos size={20} />,
      source: "/myPosts",
    },
    {
      name: "Events",
      icon: <BsIcons.BsCalendar size={20} />,
      source: "/logout",
    },
    {
      name: "Logout",
      icon: <BiIcons.BiLogOutCircle size={20} />,
      source: "/logout",
    },
  ];
  return (
    <div className='sideNav' style={{ backgroundColor: "white" }}>
      <ul style={{ listStyle: "none", width: "100%" }}>
        {items.map(({ name, icon, source }) => {
          return <Item name={name} icon={icon} source={source} />;
        })}
      </ul>
    </div>
  );
}

export default SideNav;
