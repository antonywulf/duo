import React from 'react';
import { NavLink } from 'react-router-dom';
import { House, PersonSquare } from '../../ui/svg/svg';

const DashboardLinks = () => {
  return (
    <>
      <NavLink className="nav-link nav-item" to="/" exact>
        <House />
      </NavLink>
      <NavLink className="nav-link nav-item" to="/profile">
        <PersonSquare />
      </NavLink>
    </>
  );
};

export default DashboardLinks;
