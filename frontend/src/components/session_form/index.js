import React, { Component } from "react";
import styles from "./index.module.css";

class SessionForm extends Component {
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
            placeholder="Username"
            onChange={this.handleChange("username")}
          />
          <input
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange("password")}
          />
        </form>
      </div>
    );
  }
}

export default SessionForm;
