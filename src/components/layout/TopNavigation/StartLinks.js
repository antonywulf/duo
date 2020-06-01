import React from 'react';
import { NavLink } from 'react-router-dom';

const StartLinks = () => {
  return (
    <>
      <NavLink className="nav-link nav-item" to="/signup">
        Sign Up
      </NavLink>
      <NavLink className="nav-link nav-item" to="/aboutduo">
        About DUO
      </NavLink>
      <NavLink className="nav-link nav-item" to="/signin">
        Sign In
      </NavLink>
    </>
  );
};

export default StartLinks;
