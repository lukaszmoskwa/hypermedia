$(document).ready(function(){
	$.get("devices.php?category=\"Tablet\"",function(data, status) {
		if(status == "success") {
			result = JSON.parse(data);
			for (i = 0; i < result.length; i++) {
				if (result[i]["Description"] != null) { //if the link is "clickable"
					$('#tablets').append(
						"<a href=\"device.html?id=" + result[i]["ID"] + "\">" +
							"<div class=\"col-sm-6\">" + 
								result[i]["Name"] +
								"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
							"</div>" +
						"</a>"
					)
				} else {
					$('#tablets').append(
						"<div class=\"col-sm-6\">" + 
							result[i]["Name"] +
							"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
						"</div>"
					)
				} 
			}
		}
		else if(status == "error") {
			alert("Error"); //stampare un errore in modo migliore
		}
	});
});