import React from 'react';
import StartLinks from './StartLinks';
import DashboardLinks from './DashboardLinks';
import { connect } from 'react-redux';

const TopNavigation = props => {
  const { auth } = props;
  const links = auth.uid ? <DashboardLinks /> : <StartLinks />;

  return (
    <div className="container">
      <nav className="nav nav-tabs nav-fill fixed-top nav-justified bg-white">{links}</nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(TopNavigation);
