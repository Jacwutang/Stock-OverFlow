import React, {Component} from "react";
import Cash from "./cash";
import Stocks from './stocks';
class Portfolio extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <h1>  Portfolio </h1>
      <Cash />
      <Stocks />
      </div>
    );
  }
}



export default Portfolio;
