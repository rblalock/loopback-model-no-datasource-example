var loopback = require('loopback');

module.exports = function(Message) {
	Message.greet = function(msg, cb) {
		msg = msg || 'World';
		cb(null, 'Greetings... ' + msg);
	};

	Message.remoteMethod('greet', {
		accepts: { arg: 'msg', type: 'string', required: true },
		returns: { arg: 'greeting', type: 'string' }
	});
};
