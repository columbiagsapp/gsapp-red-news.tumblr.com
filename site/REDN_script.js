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
if ( document.URL === "http://gsapp-red-scratch.tumblr.com/" ) 
{
	console.log('text-body hidden');
	//$(".text-body").css("display",'none');
	$(".text-body p").each(function(i){
		if(i > 1){
			$(this).css('display', 'none');
		}else{
			var str = $(this).text();
			
			$(this).html( _(str).prune(100) );
		}
	});
	
}
else
{
	$(".text-body").css("display",'block');
}


	$('.realpost').click(function(){
		console.log('Realpost clicked.');

		//console.log($(this).children("p.text-body").css("display"));

		if (  $(this).children("div.text-body").css("display") === "block"  )
		{
				$(this).children("div.text-body").css("display","none");

			}

		else if (  $(this).children("div.text-body").css("display") === "none"  )
			
			{
				$(this).children("div.text-body").css("display","block");


			}
		

		});










}); // END $(document).ready.....
