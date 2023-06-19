import { useState } from "react";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

import logo from "./logo.png";
import "./Header.css";

const Header = () => {
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  let boxClass = ["main-menu menu-right menuq1"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <header className="header__middle">
      <div className="container">
        <div className="row">
          {/* Add Logo  */}
          <div className="header__middle__logo">
            <NavLink
              className={({ isActive }) => {
                return isActive ? "is-active" : "";
              }}
              to="/"
            >
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="header__middle__menus">
            <nav className="main-nav ">
              {/* Responsive Menu Button */}
              {isResponsiveclose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <FiXCircle />
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    <FiAlignRight />
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "is-active" : "";
                    }}
                    onClick={toggleClass}
                    to={`/`}
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "is-active" : "";
                    }}
                    onClick={toggleClass}
                    to={`/lashes`}
                  >
                    LASHES
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "is-active" : "";
                    }}
                    onClick={toggleClass}
                    to={`/nail`}
                  >
                    NAIL BAR
                  </NavLink>
                </li>
                <li className="menu-item ">
                  <NavLink
                    className={({ isActive }) => {
                      return isActive ? "is-active" : "";
                    }}
                    onClick={toggleClass}
                    to={`/manipedi`}
                  >
                    MANI/PEDI
                  </NavLink>
                </li>
                <li
                  onClick={toggleSubmenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link to="#">
                    MORE <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? "is-active" : "";
                        }}
                        onClick={toggleClass}
                        to={`/gallery`}
                      >
                        GALLERY
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) => {
                          return isActive ? "is-active" : "";
                        }}
                        onClick={toggleClass}
                        to={`/contact`}
                      >
                        CONTACT
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
