$(document).ready(function(){
	$.getScript("js/get.js", function() { //we defined the function to take GET parameters here
		$.get("devices.php?id=" + getUrlParameter("id"),function(data, status) {
			if(status == "success") {
				result = JSON.parse(data); //we only receive 1 result (result[0])
				document.title = result[0]["Name"];
				if (result[0]["Category"] === "Smartphone") {
					$("#devicecategory").text("> Smartphones");
					$("#devicecategory").attr("href","devicessmartphones.html");
				} else if (result[0]["Category"] === "Tablet") {
					$("#devicecategory").text("> Tablets");
					$("#devicecategory").attr("href","devicestablets.html");
				}
				$("#devicepath").text("> " + result[0]["Name"]);
				$("#devicepath").attr("href","device.html?id=" + result[0]["ID"]);

				$("#title").text(result[0]["Name"]);
				$("#image").attr("src", "images/" + result[0]["ImageURL"]);
				$("#techspec").text(result[0]["TechSpec"]);
				$("#description").text(result[0]["Description"]);
				$("#price").text(result[0]["Price"]);
				$("#oldprice").text(result[0]["OldPrice"]);
			}
			else if(status == "error") {
				alert("Error"); //stampare un errore in modo migliore
			}
		});
	});
});