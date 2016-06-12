$(document).ready(function(){
	$.get("smartlife.php?category=\"Newspaper\"",function(data, status) {
		if(status == "success") {
			result = JSON.parse(data);
			for (i = 0; i < result.length; i++) {
				$('#newspaper').append(
					"<a href=\"smartlife.php?id=" + result[i]["ID"] + "\">" + //must link to an html instead
						"<div class=\"col-sm-6\">" + 
							result[i]["Name"] +
							"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
							result[i]["Price"] +
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