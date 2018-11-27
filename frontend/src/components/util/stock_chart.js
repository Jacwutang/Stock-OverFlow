import React, {Component} from "react";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {fetchRealtimeIntradayData} from '../../util/stock_api_util';
import {parsePrices} from '../../util/parsing_helper';

const helper = () => [100,200,300,400,500,400,300,200,250,300,100,50,55];

const options = {
    chart:{
      backgroundColor: null,
      style: {
          fontFamily: 'Signika, serif'
      },
    events: {
           load: function () {
              console.log("CHART LOADED");

               var series = this.series[0];
               console.log(series);
               series.setData(helper());
               // set up the updating of the chart each second
               // setInterval(function () {
               //     var x = (new Date()).getTime(), // current time
               //         y = Math.round(Math.random() * 100);
               //         series.addPoint([x, y], true, true);
               //
               // }, 1000);
           }
       }
     },

  title: {
    text: 'My stock chart'
  },
  time:{
    useUTC: false
  },
  series: [{
    name: 'Price'
  }],
  colors: ['#f45b5b', '#8085e9', '#8d4654', '#7798BF', '#aaeeee',
        '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],


    subtitle: {
        style: {
            color: 'black'
        }
    },
    tooltip: {
        borderWidth: 0
    },
    legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    plotOptions: {
        series: {
            shadow: true
        },
        candlestick: {
            lineColor: '#404048'
        },
        map: {
            shadow: false
        }
    },

    // Highstock specific
    navigator: {
        xAxis: {
            gridLineColor: '#D0D0D8'
        }
    },
    rangeSelector: {
        buttonTheme: {
            fill: 'white',
            stroke: '#C0C0C8',
            'stroke-width': 1,
            states: {
                select: {
                    fill: '#D0D0D8'
                }
            }
        }
    },
    scrollbar: {
        trackBorderColor: '#C0C0C8'
    },

    // General
    background2: '#E0E0E8'
}

class StockChart extends Component{
  constructor(props){
    super(props);


  }
  async componentDidMount() {
    // const {ticker} = this.props;
    // console.log(options);
    // let res = await fetchRealtimeIntradayData();
    // let data = await res.json();
  }

  render(){
    return(
      <HighchartsReact
    highcharts={Highcharts}
    constructorType={'stockChart'}
    options={options}
    />
    );
  }

}



export default StockChart;
