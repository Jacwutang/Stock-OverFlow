import React, {Component} from "react";
import StockChart from '../util/stock_chart';
import About from './about';
import Press from './press';

class Profile extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
      <h1> Company Profile </h1>

      <StockChart />
      <About />
      <Press />
      </div>
    );
  }
}

export default Profile;
