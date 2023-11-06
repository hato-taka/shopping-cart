import Link from "next/link";
import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link href="/">Shop</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
