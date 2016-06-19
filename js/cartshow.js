$(document).ready(function(){
	devices = show("devices");
	smartlife = show("smartlife");
	if ((devices.length + smartlife.length) == 0) {
		$("form").html("<h3>Your cart is empty</h3>");
	}
	$.get("devices.php",function(data, status) {
		result = JSON.parse(data);
		if(status == "success") {
			for (j = 0; j < devices.length; j++) {
				for (i = 0; i < result.length; i++) {
					if (result[i]["ID"] == devices[j]) {
						$("#cartdevices").append(
							"<a href=\"device.html?id=" + result[i]["ID"] + "\">" +
									"<div class=\"col-md-6\">" + 
										result[i]["Name"] +
										"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
									"</div>" +
								"</a>"
						)
						break;
					}
				}
			}

		}
	});
	$.get("smartlife.php",function(data, status) {
		result = JSON.parse(data);
		if(status == "success") {
			for (j = 0; j < smartlife.length; j++) {
				for (i = 0; i < result.length; i++) {
					if (result[i]["ID"] == smartlife[j]) {
						$("#cartsl").append(
							"<a href=\"smartlifesingle.html?id=" + result[i]["ID"] + "\">" +
									"<div class=\"col-md-6\">" + 
										result[i]["Name"] +
										"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
									"</div>" +
								"</a>"
						)
						break;
					}
				}
			}

		}
	});
});