import React, { Component } from 'react';
import styles from '../Auth.module.scss';

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    return (
      <form className="pt-3" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <legend className={`text-center ${styles.legend}`}>Create Account</legend>
        </div>

        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="text"
            className={`form-control ${styles.input}`}
            id="firstName"
            placeholder="First Name"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="text"
            className={`form-control ${styles.input}`}
            id="lastName"
            placeholder="Last Name"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="email"
            className={`form-control ${styles.input}`}
            id="email"
            placeholder="Email"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="password"
            className={`form-control ${styles.input}`}
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="form-group text-center">
          <button className={`btn btn-lg mt-3 px-5 font-weight-bolder ${styles.button}`}>
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
