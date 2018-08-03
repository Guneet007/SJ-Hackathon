var http =  require('https');
var url = 'https://s3-us-west-2.amazonaws.com/sj-placement-content/components.json';
var mqtt = require('mqtt')


http.get(url, function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
        var client  = mqtt.connect('mqtt://192.168.0.103/');
        var fbResponse = JSON.parse(body);
        client.on('connect', function () {
            client.subscribe('test')
            client.publish('test', fbResponse[1].name)
          })
           
          client.on('message', function (topic, message) {
            // message is Buffer
            console.log(message.toString())
            client.end()
        })
        // console.log("Got a response: ", fbResponse[0].name);
    });
}).on('error', function(e){
      console.log("Got an error: ", e);
});
