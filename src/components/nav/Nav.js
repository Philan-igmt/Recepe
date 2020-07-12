import React from "react";
import logo from "./images/logo.png";

function Nav() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper purple">
          <a href="#" className="brand-logo right">
            <img src={logo} width="80px" height="50px" alt="" />
          </a>
          <ul id="nav-mobile" className="left">
            <li>
              <h4>Recipe App</h4>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
