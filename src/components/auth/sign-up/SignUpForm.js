import React, { Component } from 'react';

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
      <form className="pt-5 pb-3" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <legend className="text-center">Sign Up To Get Started</legend>
        </div>

        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name"
          />
        </div>

        <div className="form-group">
          <input
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
          />
        </div>

        <div className="form-group text-center">
          <button className="btn btn-outline-primary btn-lg">Sign Up</button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
