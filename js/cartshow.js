$(document).ready(function(){
	devices = show("devices");
	smartlife = show("smartlife");
	for (i = 0; i < devices.length; i++) {
		$("#cartdevices").append(devices[i] + "<br>");
	}
	for (i = 0; i < smartlife.length; i++) {
		$("#cartsl").append(smartlife[i] + "<br>");
	}
});