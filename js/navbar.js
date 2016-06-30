$(window).resize(resize);
$(document).ready(function(){
	resize();
	$('.dropdown').on('show.bs.dropdown', function(e){
	    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});
	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		var elem = document.getElementById("sidebar-wrapper");
		left = window.getComputedStyle(elem,null).getPropertyValue("left");
		if(left == "200px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
			//document.getElementsByClassName("container")[0].style.paddingLeft="0px"
		}
		else if(left == "-200px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
			//document.getElementsByClassName("container")[0].style.paddingLeft="200px"
		}
	});
});
function resize() {
	var path = $(this);
	var contW = path.width();
	if(contW >= 768){
		document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
		document.getElementsByClassName("container")[0].style.paddingLeft="200px"
		$(".show-only-small-screen").hide();
	}else{
		document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
		document.getElementsByClassName("container")[0].style.paddingLeft="20px"
		$(".show-only-small-screen").show();
	}
}
