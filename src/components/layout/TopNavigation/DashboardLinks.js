import React from 'react';
import { NavLink } from 'react-router-dom';
import FastAccessLinks from './FastAccessLinks';
import styles from './TopNavigation.module.scss';

const DashboardLinks = () => {
  return (
    <>
      <NavLink
        style={{ boxShadow: 'inset 0 -2px 0 transparent', color: '#73b664' }}
        className={`text-uppercase nav-link nav-item ${styles.link}`}
        to="/"
        activeStyle={{
          color: '#73b664',
          boxShadow: 'inset 0 -2px 0 #73b664',
          background: 'transparent',
        }}
        exact
      >
        <div className={styles.home} />
      </NavLink>
      <FastAccessLinks />
      <NavLink
        style={{ boxShadow: 'inset 0 -2px 0 transparent', color: '#73b664' }}
        className={`text-uppercase nav-link nav-item ${styles.link}`}
        activeStyle={{
          color: '#73b664',
          boxShadow: 'inset 0 -2px 0 #73b664',
          background: 'transparent',
        }}
        to="/profile"
      >
        <div className={styles.user} />
      </NavLink>
    </>
  );
};

export default DashboardLinks;
