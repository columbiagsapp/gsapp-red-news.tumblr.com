$(document).ready( function() {
console.log("REDN Loaded");

$(window).scroll(function(){
				var scrollTop1 = 30;
				var scrollTop2 = 180;


				var scrolled = $(window).scrollTop();
					console.log(scrolled);

				if(scrolled >= scrollTop1){
					$('#CU_logo').css({position: 'fixed',  'top':'0%'})

				}

				if(scrolled <= scrollTop1){
					$('#CU_logo').css({position: 'relative',  'top':'0%'})
				}


				if(scrolled >= scrollTop2){	
					$('#logo').css({position: 'fixed', top: '-150px'})
					$('#nav').css({position: 'fixed', top: '114px'})
					//$('#blogroll').css({position: 'relative', 'margin-top': '260px'})



					}
				if(scrolled < scrollTop2){	
					$('#logo').css({position: 'relative', top: '0px'})
					$('#nav').css({position: 'relative', top: '0px'})
					$('#blogroll').css({position: 'relative', 'margin-top': '0px'})


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
