import React from "react";
import "./index.css";

const Header=({logout})=>{
  return (
    <nav>
    <div className="nav-wrapper bg-color">
      <a href="#" className="brand-logo"><i className="material-icons">view_module</i>Xebia Test</a>
      <ul className="right">
        <li><a onClick={logout}><i className="material-icons">exit_to_app</i></a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header;
