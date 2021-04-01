/*-- WEB FONTS :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

$(function(){
	$("span.change_button").click(function(){
		if ($("span.type").text() == "2"){
			$("span.type").text("1");
			$('.en').css("font-family", "'Mplus2', 'M PLUS 1p', sans-serif");
			$('.ja').css("font-family", "'Mplus2', 'M PLUS 1p', sans-serif");
			$("h1").css("font-family", "'Mplus2', 'M PLUS 1p', sans-serif");
			$("h2").css("font-family", "'Mplus2', 'M PLUS 1p', sans-serif");
		}
		else if ($("span.type").text() == "1"){
			$("span.type").text("2");
			$('.en').css("font-family", "'Mplus1', 'M PLUS 1p', sans-serif");
			$('.ja').css("font-family", "'Mplus1', 'M PLUS 1p', sans-serif");
			$("h1").css("font-family", "'Mplus1', 'M PLUS 1p', sans-serif");
			$("h2").css("font-family", "'Mplus1', 'M PLUS 1p', sans-serif");
		}
	});
});
