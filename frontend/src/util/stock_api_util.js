export const fetchRealtimeIntradayData = sym => (
  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=30min&outputsize=full&apikey=demo`, {
    method: 'get'
  })


);
