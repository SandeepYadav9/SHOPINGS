import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              All Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/favrate" exact>
              Favorite
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
