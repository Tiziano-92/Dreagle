var jsonfile = require('jsonfile')
file_address = './config/config.json';

var config = require(file_address);

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

exports.set_system_status = function(system_status){
	config.status = system_status;
}

exports.set_push_it_away = function(pia){
	config.actions.pia = pia;
}

exports.set_custom_landing = function(cis){
	config.actions.cls = cis;
}

exports.set_whitelist = function(whitelist){
	config.whitelist = whitelist;
}

exports.save_file = function(){
	jsonfile.writeFile(file_address, config, function (err) {
  		console.error(err);
  	})
}