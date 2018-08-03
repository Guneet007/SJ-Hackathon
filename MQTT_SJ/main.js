var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.43.127/')
 
client.on('connect', function () {
  //client.subscribe('test')
  client.publish('abc', 'Hello ankit')
})
 
// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
//   client.end()
// })