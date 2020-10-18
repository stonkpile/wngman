require('dotenv-flow').config()
import WebSocket from 'ws'

const ws = new WebSocket('wss://ws.coinapi.io/v1/');
ws.on('open', function open() {
var hello = {
  "type": "hello",
  "apikey": process.env.COINAPI_KEY,
  "heartbeat": false,
  "subscribe_data_type": ["trade"],
  "subscribe_filter_asset_id": ["BTC", "ETH"]
};
ws.send(JSON.stringify(hello));
});
 
ws.on('message', function incoming(data: any) {
  console.log(data);
});