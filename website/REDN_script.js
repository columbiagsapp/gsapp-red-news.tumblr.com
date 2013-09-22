$(document).ready( function() {
console.log("REDN Loaded");

$(window).scroll(function(){
				var scrollTop = 150;

				var scrolled = $(window).scrollTop();
				console.log(scrolled);
				if(scrolled >= scrollTop){	
					$('#logo').css({position: 'fixed', top: '-120px'})
					$('#nav').css({position: 'fixed', top: '144px'})
					//$('#blogroll').css({position: 'relative', 'margin-top': '260px'})
					console.log('fixed');


					}
				if(scrolled < scrollTop){	
					$('#logo').css({position: 'relative', top: '0px'})
					$('#nav').css({position: 'relative', top: '0px'})
					$('#blogroll').css({position: 'relative', 'margin-top': '0px'})


				}

				var opacityfactor = scrolled/120;
				$("#headerfademask").css({'opacity': opacityfactor});

				});



$('.realpost').click(function(){
	console.log('Realpost clicked.');

	console.log($(this).children("p.text-body").css("display"));

	if (  $(this).children("div.text-body").css("display") === "block"  )
	{
			$(this).children("div.text-body").css("display","none");

		}

else if (  $(this).children("div.text-body").css("display") === "none"  )
	
	{
		$(this).children("div.text-body").css("display","block");


	}

	

});


})
