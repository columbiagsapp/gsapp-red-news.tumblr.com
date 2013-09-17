$(document).ready( function() {
console.log("REDN Loaded");

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
