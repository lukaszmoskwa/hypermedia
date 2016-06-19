$(document).ready(function(){
	$.get("assistance.php?category=\"Technical Support\"",function(data, status) {
		if(status == "success") {
			result = JSON.parse(data);
			for (i = 0; i < result.length; i++) {
				var container;
				if (result[i]["SubCategory"] == "Smartphone and Tablet") {
					container = $('#smartphonetablets')
				} else if (result[i]["SubCategory"] == "ADSL") {
					container = $('#adsl');
				} else if (result[i]["SubCategory"] == "Mail") {
					container = $('#mail');
				}
				container.append(
					"<a href=\"assistancesingle.html?id=" + result[i]["ID"] + "\">" +
						"<div class=\"col-sm-6\">" + 
							result[i]["Name"] +
							"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
						"</div>" +
					"</a>"
				)
			}
		}
		else if(status == "error") {
			alert("Error"); //stampare un errore in modo migliore
		}
	});
});