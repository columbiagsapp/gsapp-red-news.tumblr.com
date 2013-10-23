$(document).ready( function() {

var MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];


function fetchCCPosts(){

	var cc_feed_url = "http://ccgsapp.org/red-news-json-feed";

	$.ajax(cc_feed_url, {
		dataType: "jsonp",


		success: function(data) {
			var $html = [];

			data.nodes.forEach(function(post){
				var html = [];

				var d = new Date( parseInt(post.node.created) * 1000 );
				var date = d.getDate() + ' ' + MONTHS[ d.getMonth() ] + ', ' + d.getFullYear();

				html.push( '<div class="cc-post">' );
					html.push( '<div class="date_type">' );
						html.push( '<div class="date">' );
							html.push( date );
						html.push( '</div>');//date
						html.push( '<div class="type">' );
							html.push( 'CC:GSAPP' );
						html.push( '</div>' );//type
					html.push( '</div>');//date_type

					html.push( '<a target="_blank" href="http://ccgsapp.org/node/' + post.node.nid + '" class="cc-title">' );
						html.push( post.node.field_excerpt_value );
					html.push( '</a>');
				html.push( '</div>');//cc-post

				html = html.join('');

				$html.push( html );

			});

			$('#cc-feed').append( $html.join('') );

			$('.cc-title').hover(function(){
				$(this).closest('.cc-post').css('background', 'url(http://www.columbia.edu/cu/arch/red-news/hover_bg.png)');
			}, function(){
				$(this).closest('.cc-post').css('background', '');
			});
		}

	});
}


fetchCCPosts();



function fetchEvents(){

	var events_feed_url = "http://events.gsapp.org/red-news-events-json";

	$.ajax(events_feed_url, {
		dataType: "jsonp",

		success: function(data) {
			var $html = [];

			data.nodes.forEach(function(ev){

				var html = [];

				var d = new Date( ev.node.field_event_date_value );

				var minutes = d.getMinutes();
				if(minutes.length < 2){
					minutes = "0" + minutes;
				}

				var hours = d.getHours();
				if(hours  > 12){
					hours = parseInt( hours ) - 12;
				}

				var date = d.getDate() + ' ' + MONTHS[ d.getMonth() ] + ', ' + d.getFullYear() + ' ' + hours + ':' + minutes;


				html.push( '<div class="event">' );
					html.push( '<div class="date_type">' );
						html.push( '<div class="date">' );
							html.push( '<div class="event-date">' );
								html.push( date );
							html.push( '</div>' );//event-date
						html.push( '</div>' );//date
						html.push( '<div class="type">Event</div>');
						html.push( '<div class="event-location">' );
							html.push( ev.node.field_event_location_value );
						html.push( '</div>' );//event-location
						

						

					html.push( '</div>' );//date_type

					html.push( '<a target="_blank" href="http://events.gsapp.org/node/' + ev.node.nid + '" class="event-title">' );
						html.push( ev.node.title );
					html.push( '</a>' );
				html.push( '</div>' );//events

				html = html.join('');

				$html.push( html );
			});
			
			$('#events-feed').append( $html.join('') );

			$('.event-title').hover(function(){
				$(this).closest('.event').css('background', 'url(http://www.columbia.edu/cu/arch/red-news/hover_bg.png)');
			}, function(){
				$(this).closest('.event').css('background', '');
			});
		}

	});
}


fetchEvents();





// MOVE, FADE FEATURES FOR LOGO -------------

$(window).scroll(function(){
	var scrollTop = 160;

	var scrolled = $(window).scrollTop();
	if(scrolled >= scrollTop){	
		$('#header').css({position: 'fixed', top: '-145px'});//-135
		$('#nav').css({position: 'fixed', marginTop: '79px'});
		$('#main').css({ marginTop: "239px"});
	}
	if(scrolled < scrollTop){	
		$('#header').css({position: 'relative', top: "0"});
		$('#nav').css({position: 'absolute', marginTop: "0"});
		$('#main').css({ marginTop: "0"});
	}

	//var opacityfactor = scrolled/scrollTop;
	//$("#headerfademask").css({'opacity': opacityfactor});

});//end window scroll


// CHANGE SELECTED FILTER BOX **should be made dynamic**


if (document.location.pathname == "/") {
	$('#filterall').attr("src", 'http://www.columbia.edu/cu/arch/red-news/filteron.png');

}
if (document.location.pathname == "/tagged/alumni") {
	$('#filteralumni').attr("src", 'http://www.columbia.edu/cu/arch/red-news/filteron.png');
}

if (document.location.pathname == "/tagged/class-of-2014") {
	$('#filterclass2014').attr("src", 'http://www.columbia.edu/cu/arch/red-news/filteron.png');

}
if (document.location.pathname == "/tagged/cure") {
	$('#filtercure').attr("src", 'http://www.columbia.edu/cu/arch/red-news/filteron.png');

}
if (document.location.pathname == "/tagged/interdisciplinary") {
	$('#filterinterdis').attr("src", 'http://www.columbia.edu/cu/arch/red-news/filteron.png');

}
if (document.location.pathname == "/tagged/guest") {
	$('#filterguest').attr("src", 'http://www.columbia.edu/cu/arch/red-news/filteron.png');

}
if (document.location.pathname == "/tagged/durst") {
	$('#filterdurst').attr("src", 'http://www.columbia.edu/cu/arch/red-news/filteron.png');

}

$('.post-permalink-target').hover(function(){
	$(this).closest('.post').css('background', 'url(http://www.columbia.edu/cu/arch/red-news/hover_bg.png)');
}, function(){
	$(this).closest('.post').css('background', '');
});







}); // END $(document).ready.....
