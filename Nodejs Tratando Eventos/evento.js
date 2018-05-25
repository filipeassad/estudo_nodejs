var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function (params) {
    console.log('Eu ouvi um grito!');
}

eventEmitter.on('grito', myEventHandler);

eventEmitter.emit('grito');