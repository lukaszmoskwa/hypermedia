function addItem(cookie, id) {
	cart = []
	if (getCookie(cookie) != "") { //se il cookie esiste
	    cart = JSON.parse(getCookie(cookie));
	    found = false;
	    for (i = 0; i < cart.length; i++) {
	    	if (cart[i] == id) found = true;
	    }
	    if (found) {
	    	return; //ferma la funzione, serve a impedire di aggiungere duplicati all'array
	    }
	}
	cart.push(id); //aggiunge id all'array
	setCookie(cookie, JSON.stringify(cart), 30);
	updateCount();
}
function removeItem(cookie, id) {
	cart = []
	if (getCookie(cookie) != "") { //se il cookie esiste
	    cart = JSON.parse(getCookie(cookie));
	    for (i = 0; i < cart.length; i++) {
	    	if (cart[i] == id) cart.splice(i, 1); //rimuove l'occorrenza di id dall'array
	    }
	}
	setCookie(cookie, JSON.stringify(cart), 30);
	updateCount();
}
function show(cookie) {
	if (getCookie(cookie) != "") {
		return JSON.parse(getCookie(cookie));
	}
	return [];
}
function updateCount() {
	$(".cart").html("<span class=\"glyphicon glyphicon-shopping-cart\"></span> (" + (show("devices").length + show("smartlife").length) + ")");
}
updateCount();
