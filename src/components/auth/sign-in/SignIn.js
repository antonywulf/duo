import React from 'react';
import SignInForm from './SignInForm';
import { Link, Redirect } from 'react-router-dom';
import { ArrowReturnRight } from '../../ui/svg/svg';
import { connect } from 'react-redux';
import { signIn } from '../../../store/actions/authActions';
import styles from '../Auth.module.scss';

const SignIn = props => {
  const { authError, auth } = props;

  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className={`container mt-2 pt-4 ${styles.block}`}>
      <div className={`${styles.imgLogin}`} />
      <SignInForm signIn={props.signIn} />
      {authError ? (
        <p className={`text-center lead ${styles.errMsg}`}>Incorrect Email or Password</p>
      ) : null}
      <p className={`lead mt-4 text-center ${styles.p}`}>
        Don't have an account yet?
        <br />
        <ArrowReturnRight />{' '}
        <Link className="addTextDecoration" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: credentials => dispatch(signIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
