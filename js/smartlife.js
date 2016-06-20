$(document).ready(function(){
	$.getScript("js/get.js", function() { //we defined the function to take GET parameters here
		$.get("smartlife.php?id=" + getUrlParameter("id"),function(data, status) {
			if(status == "success") {
				result = JSON.parse(data); //we only receive 1 result (result[0])
				document.title = result[0]["Name"];
				if (result[0]["Category"] === "TV and Entertainment") {
					$("#slcategory").text("TV and Entertainment");
					$("#slcategory").attr("href","smartlifetventertainment.html");
				}/* else if (result[0]["Category"] === "") {
					$("#slcategory").text("> Tablets");
					$("#slcategory").attr("href","devicestablets.html");
				}*/
				$("#slpath").text(result[0]["Name"])
							.attr("href","smartlifesingle.html?id=" + result[0]["ID"]);

				$("#title").text(result[0]["Name"]);
				$("#image").attr("src", "images/" + result[0]["ImageURL"]);
				$("#description").append(result[0]["Description"]);
				$("#activationandrules").append(result[0]["ActivationAndRules"]);
				$("#price").text(result[0]["Price"]);
				if (result[0]["OldPrice"]!=null) {
					$("#oldprice").html("<s>" + result[0]["OldPrice"] + "</s>");
				}

				found = false;
				$.getScript("js/cookie.js", function() { //we defined the function to manipulate cookies here
					$.getScript("js/cart.js", function() { //we defined the function to manipulate the cart here
						smartlife = show("smartlife");
						for (i = 0; i < smartlife.length; i++) {
							if (smartlife[i] == result[0]["ID"]) {
								found = true;
							}
						}
						if (found) {
							$("#addcart").hide();
						} else {
							$("#removecart").hide();
						}
					});
				});

				$("#addcart").click(function(){
					addItem("smartlife",result[0]["ID"]);
					$("#addcart").hide();
					$("#removecart").show();
				});
				$("#removecart").click(function(){
					removeItem("smartlife",result[0]["ID"]);
					$("#removecart").hide();
					$("#addcart").show();
				});
				for (i = 0; i < result.length; i++) {
					if (result[i]["D_ID"] != null) {
						$("#devices").append("<div><a href=\"device.html?id=" + result[i]["D_ID"] + "\">" + result[i]["D_Name"] + "<img src=images/" + result[i]["D_ImageURL"] +"></a></div>");
					}
				}
				if (result[0]["ID"] == 1) {
					$("#subcategory").show();
				}
			}
			else if(status == "error") {
				alert("Error"); //stampare un errore in modo migliore
			}
		});
	});
});