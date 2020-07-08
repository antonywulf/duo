import React from 'react';
import StartLinks from './StartLinks';
import DashboardLinks from './DashboardLinks';
import { connect } from 'react-redux';

const TopNavigation = props => {
  const { auth } = props;
  const links = auth.uid ? <DashboardLinks /> : <StartLinks />;

  return (
    <div className="container">
      <nav
        style={{ background: '#29323b' }}
        className="nav nav-tabs nav-fill fixed-top nav-justified"
      >
        {links}
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(TopNavigation);
