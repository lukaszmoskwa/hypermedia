$(document).ready(function(){
	$.get("promo.php",function(data, status) { 
		if(status == "success") {
			result = JSON.parse(data);
			for (i = 0; i < result.length; i++) {
				if (result[i]["TechSpec"] != null) { //maybe change
					$('#devices').append(
						"<a href=\"device.html?id=" + result[i]["ID"] + "\">" +
							"<div class=\"col-md-3\">" + 
								result[i]["Name"] +
								"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
							"</div>" +
						"</a>"
					)
				}
				else {
					$('#smartlife').append(
						"<a href=\"smartlifesingle.html?id=" + result[i]["ID"] + "\">" +
							"<div class=\"col-md-6\">" + 
								result[i]["Name"] +
								"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
							"</div>" +
						"</a>"
					)
				}
			}
		}
		else if(status == "error") {
			alert("Error"); //stampare un errore in modo migliore
		}
	});
});