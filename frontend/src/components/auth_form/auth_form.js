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
    this.props.processForm(this.state);
  }

  renderErrors() {
    return (
       <ul>
         {this.props.errors.map((error, i) => (
           <li key={`error-${i}`}>
             <i className={`fa fa-exclamation-circle ${styles.warning_icon}`} aria-hidden="true" />
             &nbsp; {error}
           </li>
          ))}
       </ul>
     );
   }

  render() {
    console.log(this.props.errors);
    return (
      <div className={styles.session_form_wrapper}>
        <div> {this.renderErrors()} </div>
        <form className={styles.auth_form} onSubmit={this.handleSubmit}>
          Please {`${this.props.formType}`}
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
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default AuthForm;
