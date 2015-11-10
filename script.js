//tak to trzeba pisać w tych funkcjach

function kostki(ile) {
	for(i=1;i<=Math.pow(ile,2);i++){
		$('#container').append('<div class="elo"></div>');
	};
	$(".elo").width(800/ile);
	$(".elo").height(800/ile);
};

function wyczysc(){
	$("#container").empty();
};

function kolorowanie(kolor) {
	$('.elo').mouseenter(function() { 
		$(this).css('background-color', kolor);
	});
};

function kolorowanie2() {
	$('.elo').mouseenter(function() { 
		var rgb = 'rgb(' + Math.round(Math.random()*256) +',' + Math.round(Math.random()*256) + ',' + Math.round(Math.random()*256) + ')';
		$(this).css('background-color', rgb);
	});
};

function czyszczenie(){
	$('.elo').mouseenter(function() { 
		var new_opacity = $(this).css("opacity") - 0.05;
		$(this).css("opacity", new_opacity);
	});
};

function waz(){
	$('.elo').mouseenter(function() { 
		$(this).fadeTo(50, 1, function() {
			$(this).fadeTo(2500, 0);
		});
	});
};

function zapytaj() {
	x = prompt("Podaj szerokość boku tablicy (nie większą niż powiedzmy 200, bo będziesz czekać i czekać...");
};

function inez() {
	$('#container').css('backgroundImage','url("inez.jpg")');
	$('#container').css('background-repeat','no-repeat');
	$('#container').css('background-size', '100%');
	$('#container').css('background-position', 'center');
	
};

$(document).ready(function(){
	
	kostki(16);
	kolorowanie('#837E7E');

	$("#nowa_plansza").click(function(){
		wyczysc();
		$('#container').css('backgroundImage','none');
		zapytaj();

		if (x > 0 && x < 201) {
			kostki(x);
			kolorowanie("gray");
		}
		else {
			alert("Podaj od 1 do 200. Przecież mówiłem.");
		}
	
	});

	$("#losowe_kolory").click(function(){
		wyczysc();
		$('#container').css('backgroundImage','none');
		zapytaj();

		if (x > 0 && x < 201) {
			kostki(x);
			kolorowanie2();	
		}
		else {
			alert("Podaj od 1 do 200. Przecież mówiłem.");
		}

	});

	$("#czyszczenie").click(function(){
		wyczysc();
		$('#container').css('backgroundImage','none');
		zapytaj();
		if (x > 0 && x < 201) {
			inez();
			kostki(x);
			$(".elo").css('background-color', 'black');
			czyszczenie();
		}
		else {
			alert("Podaj od 1 do 200. Przecież mówiłem.");
		}

	});

	$("#waz").click(function(){
		wyczysc();
		$('#container').css('backgroundImage','none');
		zapytaj();
		if (x > 0 && x < 201) {
			kostki(x);
			$(".elo").css('background-color', 'black');
			$(".elo").css('opacity', '0');
			waz();
		}
		else {
			alert("Podaj od 1 do 200. Przecież mówiłem.");
		}

	});
});