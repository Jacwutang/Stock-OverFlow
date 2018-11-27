import React, {Component} from "react";
// import StockChart from '../util/stock_chart';
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
