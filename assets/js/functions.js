$(".switch").bootstrapSwitch();

$("#new_wl").click(function(){
	value = $("#add_wl").val();
	window.location = "/configuration?wladd="+value;
})