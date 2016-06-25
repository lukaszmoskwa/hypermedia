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
				if (result[i]["Description"] != null) { //if the link is "clickable"
					container.append(
						"<li>" +
							"<a href=\"assistancesingle.html?id=" + result[i]["ID"] + "\">" +
								result[i]["Name"] +
							"</a>" +
						"</li>"
					)
				} else {
					container.append(
						"<li>" +
							result[i]["Name"] +
						"</li>"
					)
				}
			}
		}
		else if(status == "error") {
			alert("Error"); //stampare un errore in modo migliore
		}
	});
});