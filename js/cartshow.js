$(document).ready(function(){
	devices = show("devices");
	smartlife = show("smartlife");
	checkEmpty();
	$.get("devices.php",function(data, status) {
		result = JSON.parse(data);
		if(status == "success") {
			for (j = 0; j < devices.length; j++) {
				for (i = 0; i < result.length; i++) {
					if (result[i]["ID"] == devices[j]) {
						$("#cartdevices").append(
							"<div class=\"col-md-6\" id=device" + result[i]["ID"] + ">" + 
								"<a href=\"device.html?id=" + result[i]["ID"] + "\">" +
										result[i]["Name"] +
									"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
								"</a>" +
								"<button class=\"removecartdevice\" id=\"" + result[i]["ID"] + "\">Remove From Cart</button>" +
							"</div>"
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
							"<div class=\"col-md-6\" id=smartlife" + result[i]["ID"] + ">" + 
								"<a href=\"smartlifesingle.html?id=" + result[i]["ID"] + "\">" +
										result[i]["Name"] +
									"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
								"</a>" +
								"<button class=\"removecartsl\" id=\"" + result[i]["ID"] + "\">Remove From Cart</button>" +
							"</div>"
						)
						break;
					}
				}
			}

		}
	});
	$.getScript("js/cookie.js", function() { //we defined the function to manipulate cookies here
		$.getScript("js/cart.js", function() { //we defined the function to manipulate the cart here
			$(".removecartdevice").click(function(event){
				removeItem("devices",event.target.id);
				$("#device" + event.target.id).hide();
				checkEmpty();
			});
			$(".removecartsl").click(function(event){
				removeItem("smartlife",event.target.id);
				$("#smartlife" + event.target.id).hide();
				checkEmpty();
			});
		});
	});
});
function checkEmpty() {
	devices = show("devices");
	smartlife = show("smartlife");
	if ((devices.length + smartlife.length) == 0) {
		$("form").html("<h3>Your cart is empty</h3>");
	}
}