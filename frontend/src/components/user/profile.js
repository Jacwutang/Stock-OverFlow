import React, {Component} from "react";
import Portfolio from './portfolio';
class Profile extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <h1> User Profile </h1>
      <Portfolio />
      </div>
    );
  }
}

export default Profile;
