$(document).ready( function() {
console.log("REDN Loaded");

$(window).scroll(function(){
				var scrollTop = 130;
				var scrolled = $(window).scrollTop();
				if(scrolled >= scrollTop){	
					$('#header').css({position: 'fixed', top: '-150px'})
					$('#nav').css({position: 'fixed', top: '57px'})


					}
				if(scrolled < scrollTop){	
					$('#header').css({position: 'relative', top: '0px'})
					$('#nav').css({position: 'relative', top: '0px'})

				}
				
				//move exumas
				/*var exumasTop = 100;
				if (scrolled >= exumasTop){	$('.header h2 img').css({ position: 'fixed', top : '20px',}) }
				if (scrolled < exumasTop){	$('.header h2 img').removeAttr('style'); }*/
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

	

	console.log('Realpost end.');
});


})
