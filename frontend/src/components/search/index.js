import React, {Component} from "react";
import styles from "./index.module.css";

class  Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      query: e.target.value,
    })
  }

  render(){
    console.log(this.state.query);
    return(
      <div className={styles.search_container}>
        <i className={`fas fa-search ${styles.icon_input_field}`}></i>
        <input value={this.state.query} onChange={this.handleChange} type="text" className={styles.input_search} placeholder="Search for stocks"/>
      </div>
    )
  }

}

export default Search;


// Refactor to make it re-usable for searching for stocks, users, whatever.
