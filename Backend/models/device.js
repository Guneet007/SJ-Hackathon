var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    deviceId: {type:Number, required:'true'},
    name: {type: String, required: true},
    networkSlave1: {type:Number, required: true},
    networkSlave2: {type:Number, required: true},
    deviceType: {type: String, required: true},
    driverType:  {type:Number,required:true},
communicationCategory:  {type:String,required:true},
communicationType:  {type:String,required:true},

});

module.exports = mongoose.model('Device', schema);