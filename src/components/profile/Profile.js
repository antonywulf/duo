import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

const Profile = props => {
  const { auth, profile, signOut } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="container mt-4 pt-5 text-center">
      <h1 className="pb-3">
        {profile.firstName} {profile.lastName}
      </h1>

      <button onClick={signOut} className="btn btn-primary">
        Sign Out
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
