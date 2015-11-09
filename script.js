$(document).ready(function(){
	
	for(i=1;i<=256;i++){
		$('#container').append('<div class="grid"></div>');
	};

	$('.grid').mouseenter(function() { 
		$(this).addClass('colored');
	 });

	$('button').click(function(){
		var howmany = prompt("Podaj szerokosc boku tablicy");
		$('#container').empty();

		for(i=1;i<=Math.pow(howmany,2);i++){
			$('#container').append('<div class="grid"></div>');
		}
		$('.grid').mouseenter(function() { 
		$(this).addClass('colored');
	 });


	});

});