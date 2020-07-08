import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './TopNavigation.module.scss';

const StartLinks = () => {
  return (
    <>
      <NavLink
        style={{ boxShadow: 'inset 0 -2px 0 transparent', color: '#73b664' }}
        className={`text-uppercase nav-link nav-item ${styles.link}`}
        to="/signup"
        activeStyle={{
          color: '#73b664',
          boxShadow: 'inset 0 -2px 0 #73b664',
          background: 'transparent',
        }}
      >
        Sign Up
      </NavLink>

      <NavLink
        style={{ boxShadow: 'inset 0 -2px 0 transparent', color: '#73b664' }}
        className={`text-uppercase nav-link nav-item ${styles.link}`}
        to="/aboutduo"
        activeStyle={{
          color: '#73b664',
          boxShadow: 'inset 0 -2px 0 #73b664',
          background: 'transparent',
        }}
      >
        About DUO
      </NavLink>

      <NavLink
        style={{ boxShadow: 'inset 0 -2px 0 transparent', color: '#73b664' }}
        className={`text-uppercase nav-link nav-item ${styles.link}`}
        to="/signin"
        activeStyle={{
          color: '#73b664',
          boxShadow: 'inset 0 -2px 0 #73b664',
          background: 'transparent',
        }}
      >
        Sign In
      </NavLink>
    </>
  );
};

export default StartLinks;
