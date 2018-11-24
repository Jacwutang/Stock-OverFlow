import React, {Component} from "react";
import Layout from '../layout';
class User extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    // Make a dummy API request
    // fetch('http://localhost:5000/api/users')
  }
  render(){
    return(
        <Layout/>

    )
  }
}

export default User;
