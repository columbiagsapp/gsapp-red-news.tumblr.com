$(document).ready( function() {
console.log("REDN Loaded");



// MOVE, FADE FEATURES FOR LOGO -------------

$(window).scroll(function(){
				var scrollTop = 150;

				var scrolled = $(window).scrollTop();
				//console.log(scrolled);
				if(scrolled >= scrollTop){	
					$('#logo').css({position: 'fixed', top: '-120px'})
					$('#nav').css({position: 'fixed', top: '144px'})
					//$('#blogroll').css({position: 'relative', 'margin-top': '260px'})
					//console.log('fixed');


					}
				if(scrolled < scrollTop){	
					$('#logo').css({position: 'relative', top: '0px'})
					$('#nav').css({position: 'relative', top: '0px'})
					$('#blogroll').css({position: 'relative', 'margin-top': '0px'})


				}

				var opacityfactor = scrolled/140;
				$("#headerfademask").css({'opacity': opacityfactor});

				});//end window scroll


// EXPAND TEXT FOR POST -------------------
console.log(document.URL);







}); // END $(document).ready.....
