var Device = require('../models/device');

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vanshu:iknowit12@cluster0-kv70t.mongodb.net/test?retryWrites=true');

var devices = [
    new Device({
        deviceId: 65,
        name: "SJ-Device-7",
        networkSlave1: 3,
        networkSlave1:1,
        deviceType: "chillerController",
        driverType: 0,
        communicationCategory: "CHL",
        communicationType: "MB"
    }),
    new Device({
        deviceId:66,
        name: "SJ-Device-8",
        networkSlave1: 3,
        networkSlave1: 3,
        deviceType: "chillerController",
        driverType: 0,
        communicationCategory: "CHL",
        communicationType: "MB"
    }),
    new Device({
        deviceId:67,
        name: "SJ-Device-9",
        networkSlave1: 3,
        networkSlave1: 4,
        deviceType: "em",
        driverType: 0,
        communicationCategory: "EM",
        communicationType: "MB"
    }),
    new Device({
        deviceId:68,
        name: "SJ-Device-10",
        networkSlave1: "3",
        networkSlave1: "5",
        deviceType: "em",
        driverType: 0,
        communicationCategory: "EM",
        communicationType: "MB"
    }),
   
    
];

var done = 0;
for (var i = 0; i < devices.length; i++) {
    devices[i].save(function(err, result) {
        done++;
        if (done ==devices.length) {
            console.log("done");
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}