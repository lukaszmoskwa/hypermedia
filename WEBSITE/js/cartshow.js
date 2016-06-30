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
						if (result[i]["Description"] != null) { //if the link is "clickable"
							$("#cartdevices").append(
								"<div class=\"col-md-6\" id=device" + result[i]["ID"] + ">" +
									"<a href=\"device.html?id=" + result[i]["ID"] + "\">" +
										result[i]["Name"] +
										"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
									"</a>" +
									"<br>" +
									"<button class=\"btn removecartdevice\" id=\"" + result[i]["ID"] + "\">Remove From Cart<img src=\"images/menu_icons/white_basket.png\"></button>" +
								"</div>"
							)
						} else {
							$("#cartdevices").append(
								"<div class=\"col-md-6\" id=device" + result[i]["ID"] + ">" +
									result[i]["Name"] +
									"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
									"<br>" +
									"<button class=\"btn removecartdevice\" id=\"" + result[i]["ID"] + "\">Remove From Cart<img src=\"images/menu_icons/white_basket.png\"></button>" +
								"</div>"
							)
						}
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
						if (result[i]["Description"] != null) { //if the link is "clickable"
							$("#cartsl").append(
								"<div class=\"col-md-6\" id=smartlife" + result[i]["ID"] + ">" +
									"<a href=\"smartlifesingle.html?id=" + result[i]["ID"] + "\">" +
										result[i]["Name"] +
										"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
									"</a>" +
									"<br>" +
									"<button class=\"btn removecartsl\" id=\"" + result[i]["ID"] + "\">Remove From Cart<img src=\"images/menu_icons/white_basket.png\"></button>" +
								"</div>"
							)
						} else {
							$("#cartsl").append(
								"<div class=\"col-md-6\" id=smartlife" + result[i]["ID"] + ">" +
									result[i]["Name"] +
									"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
									"<br>" +
									"<button class=\"btn removecartsl\" id=\"" + result[i]["ID"] + "\">Remove From Cart<img src=\"images/menu_icons/white_basket.png\"></button>" +
								"</div>"
							)
						}
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
