var conf = require('./configuration');


exports.update_options = function (req){
	var whitelist = req.body.whitelist.split('\r\n');
	system_status = req.body.system_status;
	system_status = ((system_status=="on") ? 1 : 0);
	push_it_away = req.body.push_it_away;
	push_it_away = ((push_it_away=="on") ? 1 : 0);

	custom_landing = req.body.custom_landing;
	custom_landing = ((custom_landing=="on") ? 1 : 0);

	conf.set_system_status(system_status);
	conf.set_push_it_away(push_it_away);
	conf.set_custom_landing(custom_landing);
	conf.set_whitelist(whitelist);
	conf.save_file();
	return;
	
}
