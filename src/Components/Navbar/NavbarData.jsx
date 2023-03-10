import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const NavbarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome size={22} />,
    cName: "link",
    cName2: "side-nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper size={22} />,
    cName: "link",
    cName2: "side-nav-text",
  },
  {
    title: "Services",
    path: "/services",
    icon: <AiIcons.AiFillCustomerService size={22} />,
    cName: "link",
    cName2: "side-nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <AiIcons.AiOutlineMail size={22} />,
    cName: "link",
    cName2: "side-nav-text",
  },
  {
    title: "Sign Up",
    path: "/signUp",
    icon: <AiIcons.AiOutlineLogin size={22} />,
    cName: "link",
    cName2: "side-nav-text",
  },
];

export const NavTab = ({ title, icon }) => {
  return (
    <div style={{ display: "flex", alignItems: "end" }}>
      {icon}
      <span style={{ marginLeft: 2 }}>{title}</span>
    </div>
  );
};
