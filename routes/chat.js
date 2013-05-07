var messages = [];

var notifyCallback=function(){}
exports.setNotifyCallback = function(callback){
	notifyCallback=callback;
};

exports.list = function(req, res){  
  res.send(messages);
};


exports.add = function(req, res){
	var message = req.body;
	if(message.text){
		message.time = new Date();
	}
	messages.push(message);

	setTimeout(function(){
		notifyCallback(message);

	}, 10);
	res.send();
};