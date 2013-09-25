$(document).ready( function() {
console.log("REDN Loaded");



// MOVE, FADE FEATURES FOR LOGO -------------

$(window).scroll(function(){
	var scrollTop = 150;

	var scrolled = $(window).scrollTop();
	console.log(scrolled);
	if(scrolled >= scrollTop){	
		$('#logo').css({position: 'fixed', top: '-135px'});
		$('#nav').css({position: 'fixed', top: '90px'});
	}
	if(scrolled < scrollTop){	
		$('#logo').css({position: 'relative', top: '0px'});
		$('#nav').css({position: 'relative', top: '0px'});
		$('#blogroll').css({position: 'relative', 'margin-top': '0px'});
	}

	var opacityfactor = scrolled/scrollTop;
	$("#headerfademask").css({'opacity': opacityfactor});

});//end window scroll


// EXPAND TEXT FOR POST -------------------
console.log(document.URL);


// CHANGE SELECTED FILTER BOX **should be made dynamic**


if (document.URL == "http://gsapp-red-scratch.tumblr.com/") {
	$('#filterall').attr("src", 'http://scratch.postfog.org/red-news/filteron.png');

}
if (document.URL == "http://gsapp-red-scratch.tumblr.com/tagged/alumni") {
	$('#filteralumni').attr("src", 'http://scratch.postfog.org/red-news/filteron.png');

}
if (document.URL == "http://gsapp-red-scratch.tumblr.com/tagged/alumni-profile") {
	$('#filteralumniprofile').attr("src", 'http://scratch.postfog.org/red-news/filteron.png');

}
if (document.URL == "http://gsapp-red-scratch.tumblr.com/tagged/class2014") {
	$('#filterclass2014').attr("src", 'http://scratch.postfog.org/red-news/filteron.png');

}
if (document.URL == "http://gsapp-red-scratch.tumblr.com/tagged/cure") {
	$('#filtercure').attr("src", 'http://scratch.postfog.org/red-news/filteron.png');

}
if (document.URL == "http://gsapp-red-scratch.tumblr.com/tagged/interdisciplinary") {
	$('#filterinterdis').attr("src", 'http://scratch.postfog.org/red-news/filteron.png');

}
if (document.URL == "http://gsapp-red-scratch.tumblr.com/tagged/guest") {
	$('#filterguest').attr("src", 'http://scratch.postfog.org/red-news/filteron.png');

}
if (document.URL == "http://gsapp-red-scratch.tumblr.com/tagged/durst") {
	$('#filterdurst').attr("src", 'http://scratch.postfog.org/red-news/filteron.png');

}

$('.post-permalink-target').hover(function(){
	$(this).closest('.post').css('background', 'url(http://scratch.postfog.org/red-news/hover_bg.png)');
}, function(){
	$(this).closest('.post').css('background', '');
});



}); // END $(document).ready.....
