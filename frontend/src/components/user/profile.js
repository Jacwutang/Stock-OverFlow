import React, {Component} from "react";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const options = {
  title: {
    text: 'My stock chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}
class Profile extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <h1> User Profile </h1>
    );
  }
}

export default Profile;
