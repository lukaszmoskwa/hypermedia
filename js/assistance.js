$(document).ready(function(){
	$.getScript("js/get.js", function() { //we defined the function to take GET parameters here
		$.get("assistance.php?id=" + getUrlParameter("id"),function(data, status) {
			if(status == "success") {
				result = JSON.parse(data); //we only receive 1 result (result[0])
				document.title = result[0]["Name"];
				if (result[0]["Category"] === "Technical Support") {
					$("#assistancecategory").text("Technical Support")
										.attr("href","assistancetechnicalsupport.html");
				}
				$("#assistancepath").text(result[0]["Name"])
								.attr("href","assistancesingle.html?id=" + result[0]["ID"]);

				$("#title").text(result[0]["Name"]);
				$("#description").text(result[0]["Description"]);
				$("#faq").text(result[0]["FAQ"]);
				for (i = 0; i < result.length; i++) {
					if (result[i]["D_ID"] != null) {
						$("#devices").append("<div><a href=\"device.html?id=" + result[i]["D_ID"] + "\">" + result[i]["D_Name"] + "</a></div>");
					}
				}
			}
			else if(status == "error") {
				alert("Error"); //stampare un errore in modo migliore
			}
		});
	});
});