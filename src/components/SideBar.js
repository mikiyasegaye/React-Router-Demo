import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <ul
        style={{
          textAlign: "left",
        }}
      >
        <li
          style={{
            display: "inline",
            padding: "25px",
          }}
        >
          <Link to="/Home">Home</Link>
        </li>
        <li
          style={{
            display: "inline",
            padding: "25px",
          }}
        >
          <Link to="/Contact">Contact</Link>
        </li>
        <li
          style={{
            display: "inline",
            padding: "25px",
          }}
        >
          <Link to="/About">About</Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default SideBar;
