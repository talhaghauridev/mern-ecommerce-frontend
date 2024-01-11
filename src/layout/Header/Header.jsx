import React from "react";
import { NAV } from "../../constants";
import { Link } from "react-router-dom";
import { Img } from "../../components";

const Header = () => {
  return (
    <header id="header">
      <nav>
        <div></div>

        <ul>
          {NAV.Links.map((item, i) => (
            <>
              <li>
                <Link to={item.path}>{item.name}</Link>
              </li>
            </>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
