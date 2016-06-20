$(document).ready(function(){
	$.get("smartlife.php?category=\"Newspaper\"",function(data, status) {
		if(status == "success") {
			result = JSON.parse(data);
			$.getScript("js/cookie.js", function() { //we defined the function to manipulate cookies here
				$.getScript("js/cart.js", function() { //we defined the function to manipulate the cart here
					for (i = 0; i < result.length; i++) {
						$('#newspaper').append(
							"<div class=\"col-sm-6\">" + 
								//"<a href=\"smartlife.php?id=" + result[i]["ID"] + "\">" + //must link to an html instead
									result[i]["Name"] +
									"<img class=\"img-responsive\" src=\"images\/" + result[i]["ImageURL"] + "\" alt=\"" + result[i]["Name"] + "\">" +
									result[i]["Price"] +
								//"</a>" +
								"<button class=\"addcart\" id=\"" + result[i]["ID"] + "\">Add To Cart<img src=\"images/menu_icons/white_basket.png\"></button>" +
								"<button class=\"removecart\" id=\"" + result[i]["ID"] + "\">Remove From Cart<img src=\"images/menu_icons/white_basket.png\"></button>" +
							"</div>"
						)
						found = false;
						smartlife = show("smartlife");
						for (j = 0; j < smartlife.length; j++) {
							if (smartlife[j] == result[i]["ID"]) {
								found = true;
							}
						}
						if (found) {
							$("#" + result[i]["ID"] + ".addcart").hide();
						} else {
							$("#" + result[i]["ID"] + ".removecart").hide();
						}
					}
					$(".addcart").click(function(event){
						addItem("smartlife",event.target.id);
						$("#" + event.target.id + ".addcart").hide();
						$("#" + event.target.id + ".removecart").show();
					});
					$(".removecart").click(function(event){
						removeItem("smartlife",event.target.id);
						$("#" + event.target.id + ".removecart").hide();
						$("#" + event.target.id + ".addcart").show();
					});
				});
			});
		}
		else if(status == "error") {
			alert("Error"); //stampare un errore in modo migliore
		}
	});
});