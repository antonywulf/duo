import React from 'react';
import SignInForm from './SignInForm';
import { Link, Redirect } from 'react-router-dom';
import { ArrowReturnRight } from '../../ui/svg/svg';
import { connect } from 'react-redux';
import { signIn } from '../../../store/actions/authActions';

const SignIn = props => {
  const { authError, auth } = props;

  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container  mt-5 pt-3">
      <SignInForm signIn={props.signIn} />
      {authError ? <p className="text-center text-danger">Incorrect Email or Password</p> : null}

      <hr className="mt-5" />
      <p className="text-center">
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
