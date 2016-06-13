$(document).ready(function(){
	$.get("assistance.php?category=\"Technical Support\"",function(data, status) {
		if(status == "success") {
			result = JSON.parse(data);
			for (i = 0; i < result.length; i++) { //THIS WILL BE MOVED TO A FUNCTION IN ORDER NOT TO COPY PASTE CODE
				if (result[i]["SubCategory"] == "Smartphone and Tablet") {
					$('#smartphonetablets').append(
						"<a href=\"assistancesingle.html?id=" + result[i]["ID"] + "\">" + //must link to an html instead
							"<div class=\"col-sm-6\">" + 
								result[i]["Name"] +
								"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
							"</div>" +
						"</a>"
					)
				} else if (result[i]["SubCategory"] == "ADSL") {
					$('#adsl').append(
						"<a href=\"assistancesingle.html?id=" + result[i]["ID"] + "\">" + //must link to an html instead
							"<div class=\"col-sm-6\">" + 
								result[i]["Name"] +
								"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
							"</div>" +
						"</a>"
					)
				} else if (result[i]["SubCategory"] == "Mail") {
					$('#mail').append(
						"<a href=\"assistancesingle.html?id=" + result[i]["ID"] + "\">" + //must link to an html instead
							"<div class=\"col-sm-6\">" + 
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