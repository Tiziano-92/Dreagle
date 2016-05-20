var config = require('./config/config.json');

exports.localReg = function() {
	
	var system_status = config.status;
	var whitelist = config.whitelist;
	var push_it_away = config.actions.pia;
	var custom_landing = config.actions.cls;
	var logs_link = config.firmware.logs;
	return config
}

exports.get_system_status = function(){
	return config.status;
}

exports.get_whitelist = function(){
	return config.whitelist;
}

exports.get_push_it_away = function(){
	return config.actions.pia;
}

exports.get_custom_landing = function(){
	return config.actions.cls;
}

exports.get_logs_link = function(){
	return config.firmware.logs;
}