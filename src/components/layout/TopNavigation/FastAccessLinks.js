import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styles from './TopNavigation.module.scss';

const FastAccessLinks = props => {
  return (
    <>
      <Route
        path="/recipes"
        render={() => (
          <NavLink
            style={{ boxShadow: 'inset 0 -2px 0 transparent', color: '#73b664' }}
            className={`text-uppercase nav-link nav-item ${styles.link}`}
            to="/recipes"
            activeStyle={{
              color: '#73b664',
              boxShadow: 'inset 0 -2px 0 #73b664',
              background: 'transparent',
            }}
          >
            <div className={styles.dish} />
          </NavLink>
        )}
      />
      <Route
        path="/recipes/:category"
        render={props => {
          const category = props.match.params.category;
          if (category !== 'create') {
            return (
              <NavLink
                style={{ boxShadow: 'inset 0 -2px 0 transparent', color: '#73b664' }}
                className={`text-uppercase nav-link nav-item ${styles.link}`}
                to={`/recipes/${category}`}
                activeStyle={{
                  color: '#73b664',
                  boxShadow: 'inset 0 -2px 0 #73b664',
                  background: 'transparent',
                }}
              >
                <div className={styles[category]} />
              </NavLink>
            );
          }
        }}
      />
    </>
  );
};

export default FastAccessLinks;
