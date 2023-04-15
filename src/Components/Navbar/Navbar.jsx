import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import { NavbarData } from "./NavbarData";
import theme from "../../theme";
import Button from "../Button/Button";

function Navbar() {
  const [sidebar, setSidebar] = useState(true);
  const style = {
    x: 1,
    y: 0.5,
    backgroundcolor: theme.backGroundSecondry,
    color: "white",
    borderWidth: 0,
    bordercolor: "white",
  };

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
        <div className='search'>
          <FaIcons.FaSearch color={theme.para} size={18} />
          <input type='text' placeholder='Search' />
        </div>
        <Button
          title={"Create"}
          style={style}
          icon={
            <FiIcons.FiPlusSquare
              size={25}
              color='white'
              style={{ marginRight: 5 }}
            />
          }
        />
        <div className='navbarImg'>
          <img
            src='https://images.news9live.com/h-upload/2022/07/02/448078-sidhu.jpg?w=663'
            alt=''
            width={"100%"}
            style={{ borderRadius: 15 }}
          />
        </div>
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
