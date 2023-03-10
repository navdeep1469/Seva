import React, { useState } from "react";
import "./style.css";
import theme from "../../theme";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData, NavTab } from "./NavbarData";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <IconContext.Provider value={{ color: theme.text }}>
      <div
        className='navbar scale-up-center'
        style={{ background: theme.backGroundPrimary }}
      >
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
        <div className='navbar-items desktop-navbar'>
          <ul>
            {NavbarData.map(({ cName, path, title, icon }, i) => {
              return (
                <Link to={path} className={cName} style={{ color: theme.text }}>
                  <NavTab title={title} icon={icon} />
                </Link>
              );
            })}
          </ul>
        </div>

        <div className='mobile-navbar'>
          <div className='side-navbar'>
            <Link to='#' className='side-menu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "side-nav-menu active" : "side-nav-menu"}>
            <ul className='side-nav-menu-items' onClick={showSidebar}>
              <li className='side-navbar-toggle'>
                <Link to='#' className='side-menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {NavbarData.map(({ cName2, icon, path, title }, i) => {
                return (
                  <li key={i} className={cName2}>
                    <Link to={path}>
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
    </IconContext.Provider>
  );
}

export default Navbar;
