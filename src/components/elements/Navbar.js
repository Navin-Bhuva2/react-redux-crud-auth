import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/contacts" className="navbar-brand">
          Contact Book
        </Link>
        <div>
          <Link to="/contacts/add" className="btn btn-light ml-auto">
            Create Contact
          </Link>
          </div>
          <div>
          <Link  className="btn btn-light ml-auto" to="/login"><button onClick={() =>{ localStorage.setItem('isAuthenticateAdmin', false); localStorage.setItem('isSignIn', false)}}>Log Out</button></Link>  
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
