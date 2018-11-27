import React, {Component} from "react";
import CashOverviewIcon from "./cash_overview_icon";
import StocksOverviewIcon from './stocks_overview_icon';
import StocksList from './stocks_list';
// import StockChart from '../util/stock_chart';

class Portfolio extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <h1>  Portfolio </h1>
      <CashOverviewIcon />
      <StocksOverviewIcon />
      </div>
    );
  }
}



export default Portfolio;
