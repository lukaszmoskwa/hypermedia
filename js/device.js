$(document).ready(function(){
	$.getScript("js/get.js", function() { //we defined the function to take GET parameters here
		$.get("devices.php?id=" + getUrlParameter("id"),function(data, status) {
			if(status == "success") {
				result = JSON.parse(data); //we only receive 1 result (result[0])
				document.title = result[0]["Name"];
				if (result[0]["Category"] === "Smartphone") {
					$("#devicecategory").text("> Smartphones")
										.attr("href","devicessmartphones.html");
				} else if (result[0]["Category"] === "Tablet") {
					$("#devicecategory").text("> Tablets")
										.attr("href","devicestablets.html");
				}
				$("#devicepath").text("> " + result[0]["Name"])
								.attr("href","device.html?id=" + result[0]["ID"]);

				$("#title").text(result[0]["Name"]);
				$("#image").attr("src", "images/" + result[0]["ImageURL"]);
				$("#techspec").text(result[0]["TechSpec"]);
				$("#description").text(result[0]["Description"]);
				$("#price").text(result[0]["Price"]);
				$("#oldprice").text(result[0]["OldPrice"]);
				for (i = 0; i < result.length; i++) {
					if (result[i]["SL_ID"] != null) {
						$("#smartlife").append("<div><a href=\"smartlifesingle.html?id=" + result[i]["SL_ID"] + "\">" + result[i]["SL_Name"] + "</a></div>");
					} else if (result[i]["A_ID"] != null) {
						$("#assistance").append("<div><a href=\"assistancesingle.html?id=" + result[i]["A_ID"] + "\">" + result[i]["A_Name"] + "</a></div>");
					}
				}
			}
			else if(status == "error") {
				alert("Error"); //stampare un errore in modo migliore
			}
		});
	});
});