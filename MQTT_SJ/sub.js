var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://192.168.0.102/')
 
client.on('connect', function () {
  client.subscribe('abc')
//   client.publish('test', 'Hello ankit')
})
 
// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
//   client.end()
// })