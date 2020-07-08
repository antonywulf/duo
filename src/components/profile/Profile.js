import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import styles from './Profile.module.scss';

const Profile = props => {
  const { auth, profile, signOut } = props;

  if (!auth.uid) return <Redirect to="/signin" />;

  if (profile.isLoaded) {
    return (
      <div className={`container mt-4 pt-4 text-center ${styles.block}`}>
        <h1 className={`py-3 text-center ${styles.h1}`}>
          {profile.firstName} {profile.lastName}
        </h1>
        <button onClick={signOut} className={`btn btn-lg font-weight-bolder ${styles.button}`}>
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <div className={`container mt-4 pt-5 ${styles.block}`}>
        <p className={`lead text-center ${styles.loadingP}`}>Loading profile...</p>
      </div>
    );
  }
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
