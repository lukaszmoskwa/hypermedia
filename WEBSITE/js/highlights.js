$(document).ready(function(){
	$.get("assistance.php?highlight=1",function(data, status) {
		if(status == "success") {
			result = JSON.parse(data);
			for (i = 0; i < result.length; i++) {
				if (result[i]["Description"] != null) { //if the link is "clickable"
					$('#highlights').append(
						"<div class=\"custom-padding\">" + 
							"<a href=\"assistancesingle.html?id=" + result[i]["ID"] + "\">" +
								"<div align=\"center\" class=\"single-content\">" + 
									result[i]["Name"] +
								"</div>" +
							"</a>" +
						"</div>"
					)
				} else {
					$('#highlights').append(
						"<div class=\"custom-padding\">" + 
							"<div align=\"center\" class=\"single-content\">" + 
								result[i]["Name"] +
							"</div>" +
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