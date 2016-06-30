$(document).ready(function(){
	$.get("smartlife.php?category=\"TV and Entertainment\"",function(data, status) {
		if(status == "success") {
			result = JSON.parse(data);
			for (i = 0; i < result.length; i++) {
				if (result[i]["Description"] != null) { //if the link is "clickable"
					$('#tventertainment').append(
						"<a href=\"smartlifesingle.html?id=" + result[i]["ID"] + "\">" + //should change html name
							"<div class=\"col-sm-6 container\" align=\"center\">" + 
								result[i]["Name"] +
								"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
							"</div>" +
						"</a>"
					)
				} else {
					$('#tventertainment').append(
						"<div class=\"col-sm-6 container\" align=\"center\">" + 
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