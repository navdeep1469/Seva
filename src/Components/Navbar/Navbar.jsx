import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData, NavTab } from "./NavbarData";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <Link to={"/Home"} className='link'>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <h2
              style={{
                margin: 0,
                padding: 0,
                fontSize: "2.5em",
                fontWeight: "bolder",
                color: "#FF7BA9",
              }}
            >
              Seva
            </h2>
            <h4
              style={{
                margin: 0,
                padding: 0,
                fontSize: "1.5em",
                color: "#FF7BA9",
              }}
            >
              Be Selfless
            </h4>
          </div>
        </Link>
      </div>
      <div className='desktop-navbar'>
        <ul>
          {NavbarData.map(({ cName, path, title, icon }, i) => {
            return (
              <Link to={path} className={cName} style={{ color: "#f9f9f9" }}>
                <button>
                  <NavTab title={title} icon={icon} />
                </button>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className='mobile-navbar'>
        <div className='side-navbar'>
          <Link to='#' className='side-menu-bars' style={{ color: "#7c7c7c" }}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav
          className={sidebar ? "side-nav-menu active" : "side-nav-menu"}
          style={{ backgroundColor: "#ff7ba9" }}
        >
          <ul className='side-nav-menu-items' onClick={showSidebar}>
            <li className='side-navbar-toggle'>
              <Link
                to='#'
                className='side-menu-bars'
                style={{ color: "#f9f9f9" }}
              >
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavbarData.map(({ cName2, icon, path, title }, i) => {
              return (
                <li key={i} className={cName2}>
                  <Link to={path} style={{ color: "#f9f9f9" }}>
                    {icon}
                    <span>{title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
