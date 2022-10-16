import React from "react";
import logo from "../assets/globe.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo--nav" />
      <p>my travel journal.</p>
    </nav>
  );
}
