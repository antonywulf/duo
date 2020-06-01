import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ArrowReturnRight } from '../../ui/svg/svg';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/authActions';

const SignUp = props => {
  const { auth, signUp, authError } = props;

  if (auth.uid) return <Redirect to="/" />;

  return (
    <div className="container mt-4 pt-4">
      <SignUpForm signUp={signUp} />
      {authError ? <p className="text-center text-danger">{authError}</p> : null}

      <hr />
      <p className="text-center">
        Already have an account?
        <br />
        <ArrowReturnRight />{' '}
        <Link className="addTextDecoration" to="/signin">
          Sign In
        </Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
