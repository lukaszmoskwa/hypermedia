$(document).ready(function(){
	$.getScript("js/get.js", function() { //we defined the function to take GET parameters here
		$.get("smartlife.php?id=" + getUrlParameter("id"),function(data, status) {
			if(status == "success") {
				result = JSON.parse(data); //we only receive 1 result (result[0])
				document.title = result[0]["Name"];
				if (result[0]["Category"] === "TV and Entertainment") {
					$("#slcategory").text("> TV and Entertainment");
					$("#slcategory").attr("href","smartlifetventertainment.html");
				}/* else if (result[0]["Category"] === "") {
					$("#slcategory").text("> Tablets");
					$("#slcategory").attr("href","devicestablets.html");
				}*/
				$("#slpath").text("> " + result[0]["Name"])
							.attr("href","smartlifesingle.html?id=" + result[0]["ID"]);

				$("#title").text(result[0]["Name"]);
				$("#image").attr("src", "images/" + result[0]["ImageURL"]);
				$("#description").text(result[0]["Description"]);
				$("#activationandrules").text(result[0]["ActivationAndRules"]);
				$("#price").text(result[0]["Price"]);
				$("#oldprice").text(result[0]["OldPrice"]);
			}
			else if(status == "error") {
				alert("Error"); //stampare un errore in modo migliore
			}
		});
	});
});