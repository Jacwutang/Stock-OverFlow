import React, { Component } from "react";
import styles from "./index.module.css";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  renderErrors() {}

  render() {
    
    return (
      <div className={styles.session_form_wrapper}>
        <form className="" onSubmit={this.handleSubmit}>
          Please login or signup
          <input
            value={this.state.username}
            type="text"
            placeholder="Username"
            onChange={this.handleChange("username")}
          />
          <input
            value={this.state.password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange("password")}
          />
        </form>
      </div>
    );
  }
}

export default AuthForm;
