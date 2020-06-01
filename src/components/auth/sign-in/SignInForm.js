import React, { Component } from 'react';

class SignInForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    return (
      <form className="mt-5 pt-5 pb-3" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <legend className="text-center">Sign In To Continue</legend>
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

        <div className="form-group text-center">
          <button className="btn btn-outline-primary btn-lg">Sign In</button>
        </div>
      </form>
    );
  }
}

export default SignInForm;
