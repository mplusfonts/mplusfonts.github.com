/*-- ANIMATION :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

(function($){ 
	$.fn.anim = function (o) {
		return this.each(function(){
			var o = $.extend({d:500}, o);
			var c = $(this).children();
			var a = 0;
			var r = function(){c.hide(); c.eq(a % c.length).show(); ++a;}
			r();
			setInterval(r, o.d);
		});
	}
})(jQuery);

$(function(){
	$("div.zoo-animation").anim();
});

/*-- WEB FONTS :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

$(document).ready(function(){
	$("span.m2").css("border-bottom-color", "#FFF");
});

$(function(){
	$("span.change_font1").click(function(){
		$("h1").css("font-family", "'M PLUS 1', sans-serif");
		$("h2").css("font-family", "'M PLUS 1', sans-serif");
		$("p.EN").css("font-family", "'M PLUS 1', sans-serif");
		$("p.JA").css("font-family", "'M PLUS 1', sans-serif");
		$("#menu").css("font-family", "'M PLUS 1', sans-serif");
		$("span.m1").css("border-bottom-color", "#CCC");
		$("span.m2").css("border-bottom-color", "#FFF");
	});
});

$(function(){
	$("span.change_font2").click(function(){
		$("h1").css("font-family", "'M PLUS 2', sans-serif");
		$("h2").css("font-family", "'M PLUS 2', sans-serif");
		$("p.EN").css("font-family", "'M PLUS 2', sans-serif");
		$("p.JA").css("font-family", "'M PLUS 2', sans-serif");
		$("#menu").css("font-family", "'M PLUS 2', sans-serif");
		$("span.m1").css("border-bottom-color", "#FFF");
		$("span.m2").css("border-bottom-color", "#CCC");
	});
});

$(document).ready(function(){
	$("span.cl60").css("border-bottom-color", "#FFF");
});

$(function(){
	$("span.change_font50").click(function(){
		$("pre.terminal").css("font-variation-settings", "'wght' 400, 'wdth' 100");
		$("span.cl50").css("border-bottom-color", "#CCC");
		$("span.cl60").css("border-bottom-color", "#FFF");
	});
});

$(function(){
	$("span.change_font60").click(function(){
		$("pre.terminal").css("font-variation-settings", "'wght' 400, 'wdth' 125");
		$("span.cl50").css("border-bottom-color", "#FFF");
		$("span.cl60").css("border-bottom-color", "#CCC");
	});
});

/*-- SHOW MENU :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

$(document).ready(function(){
	$("#menu").hide();
});

$(function(){
	$("div.show_menu").click(function(){
		$("#menu").show();
	});
});

$(function(){
	$("#menu").click(function(){
		$("#menu").hide();
	});
});

/*-- SELECT WEIGHT :::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */

$(document).ready(function(){
	$("div.select_weight span.700").css("color", "#DDD");
});

/*-- M PLUS 1 --------------------------------------------------------------- */

$(function(){
	$("div.mp1 span.100").hover(function(){
		$("span.mplus1").css("font-variation-settings", "'wght' 100");
		$("div.mp1 span").css("color", "#888");
		$("div.mp1 span.100").css("color", "#DDD");
		$("div.mp1 span.selected_weight").text("Thin 100");
	});
});

$(function(){
	$("div.mp1 span.200").hover(function(){
		$("span.mplus1").css("font-variation-settings", "'wght' 200");
		$("div.mp1 span").css("color", "#888");
		$("div.mp1 span.200").css("color", "#DDD");
		$("div.mp1 span.selected_weight").text("Extra-light 200");
	});
});

$(function(){
	$("div.mp1 span.300").hover(function(){
		$("span.mplus1").css("font-variation-settings", "'wght' 300");
		$("div.mp1 span").css("color", "#888");
		$("div.mp1 span.300").css("color", "#DDD");
		$("div.mp1 span.selected_weight").text("Light 300");
	});
});

$(function(){
	$("div.mp1 span.400").hover(function(){
		$("span.mplus1").css("font-variation-settings", "'wght' 400");
		$("div.mp1 span").css("color", "#888");
		$("div.mp1 span.400").css("color", "#DDD");
		$("div.mp1 span.selected_weight").text("Regular 400");
	});
});

$(function(){
	$("div.mp1 span.500").hover(function(){
		$("span.mplus1").css("font-variation-settings", "'wght' 500");
		$("div.mp1 span").css("color", "#888");
		$("div.mp1 span.500").css("color", "#DDD");
		$("div.mp1 span.selected_weight").text("Medium 500");
	});
});

$(function(){
	$("div.mp1 span.600").hover(function(){
		$("span.mplus1").css("font-variation-settings", "'wght' 600");
		$("div.mp1 span").css("color", "#888");
		$("div.mp1 span.600").css("color", "#DDD");
		$("div.mp1 span.selected_weight").text("Semi-bold 600");
	});
});

$(function(){
	$("div.mp1 span.700").hover(function(){
		$("span.mplus1").css("font-variation-settings", "'wght' 700");
		$("div.mp1 span").css("color", "#888");
		$("div.mp1 span.700").css("color", "#DDD");
		$("div.mp1 span.selected_weight").text("Bold 700");
	});
});

$(function(){
	$("div.mp1 span.800").hover(function(){
		$("span.mplus1").css("font-variation-settings", "'wght' 800");
		$("div.mp1 span").css("color", "#888");
		$("div.mp1 span.800").css("color", "#DDD");
		$("div.mp1 span.selected_weight").text("Extra-bold 800");
	});
});

$(function(){
	$("div.mp1 span.900").hover(function(){
		$("span.mplus1").css("font-variation-settings", "'wght' 900");
		$("div.mp1 span").css("color", "#888");
		$("div.mp1 span.900").css("color", "#DDD");
		$("div.mp1 span.selected_weight").text("Black 900");
	});
});

/*-- M PLUS 2 --------------------------------------------------------------- */

$(function(){
	$("div.mp2 span.100").hover(function(){
		$("span.mplus2").css("font-variation-settings", "'wght' 100");
		$("div.mp2 span").css("color", "#888");
		$("div.mp2 span.100").css("color", "#DDD");
		$("div.mp2 span.selected_weight").text("Thin 100");
	});
});

$(function(){
	$("div.mp2 span.200").hover(function(){
		$("span.mplus2").css("font-variation-settings", "'wght' 200");
		$("div.mp2 span").css("color", "#888");
		$("div.mp2 span.200").css("color", "#DDD");
		$("div.mp2 span.selected_weight").text("Extra-light 200");
	});
});

$(function(){
	$("div.mp2 span.300").hover(function(){
		$("span.mplus2").css("font-variation-settings", "'wght' 300");
		$("div.mp2 span").css("color", "#888");
		$("div.mp2 span.300").css("color", "#DDD");
		$("div.mp2 span.selected_weight").text("Light 300");
	});
});

$(function(){
	$("div.mp2 span.400").hover(function(){
		$("span.mplus2").css("font-variation-settings", "'wght' 400");
		$("div.mp2 span").css("color", "#888");
		$("div.mp2 span.400").css("color", "#DDD");
		$("div.mp2 span.selected_weight").text("Regular 400");
	});
});

$(function(){
	$("div.mp2 span.500").hover(function(){
		$("span.mplus2").css("font-variation-settings", "'wght' 500");
		$("div.mp2 span").css("color", "#888");
		$("div.mp2 span.500").css("color", "#DDD");
		$("div.mp2 span.selected_weight").text("Medium 500");
	});
});

$(function(){
	$("div.mp2 span.600").hover(function(){
		$("span.mplus2").css("font-variation-settings", "'wght' 600");
		$("div.mp2 span").css("color", "#888");
		$("div.mp2 span.600").css("color", "#DDD");
		$("div.mp2 span.selected_weight").text("Semi-bold 600");
	});
});

$(function(){
	$("div.mp2 span.700").hover(function(){
		$("span.mplus2").css("font-variation-settings", "'wght' 700");
		$("div.mp2 span").css("color", "#888");
		$("div.mp2 span.700").css("color", "#DDD");
		$("div.mp2 span.selected_weight").text("Bold 700");
	});
});

$(function(){
	$("div.mp2 span.800").hover(function(){
		$("span.mplus2").css("font-variation-settings", "'wght' 800");
		$("div.mp2 span").css("color", "#888");
		$("div.mp2 span.800").css("color", "#DDD");
		$("div.mp2 span.selected_weight").text("Extra-bold 800");
	});
});

$(function(){
	$("div.mp2 span.900").hover(function(){
		$("span.mplus2").css("font-variation-settings", "'wght' 900");
		$("div.mp2 span").css("color", "#888");
		$("div.mp2 span.900").css("color", "#DDD");
		$("div.mp2 span.selected_weight").text("Black 900");
	});
});

/*-- M PLUS 1 CODE ---------------------------------------------------------- */

$(function(){
	$("div.mp1c span.100").hover(function(){
		$("span.mplus1code").css("font-variation-settings", "'wght' 100");
		$("div.mp1c span").css("color", "#888");
		$("div.mp1c span.100").css("color", "#DDD");
		$("div.mp1c span.selected_weight").text("Thin 100");
	});
});

$(function(){
	$("div.mp1c span.200").hover(function(){
		$("span.mplus1code").css("font-variation-settings", "'wght' 200");
		$("div.mp1c span").css("color", "#888");
		$("div.mp1c span.200").css("color", "#DDD");
		$("div.mp1c span.selected_weight").text("Extra-light 200");
	});
});

$(function(){
	$("div.mp1c span.300").hover(function(){
		$("span.mplus1code").css("font-variation-settings", "'wght' 300");
		$("div.mp1c span").css("color", "#888");
		$("div.mp1c span.300").css("color", "#DDD");
		$("div.mp1c span.selected_weight").text("Light 300");
	});
});

$(function(){
	$("div.mp1c span.400").hover(function(){
		$("span.mplus1code").css("font-variation-settings", "'wght' 400");
		$("div.mp1c span").css("color", "#888");
		$("div.mp1c span.400").css("color", "#DDD");
		$("div.mp1c span.selected_weight").text("Regular 400");
	});
});

$(function(){
	$("div.mp1c span.500").hover(function(){
		$("span.mplus1code").css("font-variation-settings", "'wght' 500");
		$("div.mp1c span").css("color", "#888");
		$("div.mp1c span.500").css("color", "#DDD");
		$("div.mp1c span.selected_weight").text("Medium 500");
	});
});

$(function(){
	$("div.mp1c span.600").hover(function(){
		$("span.mplus1code").css("font-variation-settings", "'wght' 600");
		$("div.mp1c span").css("color", "#888");
		$("div.mp1c span.600").css("color", "#DDD");
		$("div.mp1c span.selected_weight").text("Semi-bold 600");
	});
});

$(function(){
	$("div.mp1c span.700").hover(function(){
		$("span.mplus1code").css("font-variation-settings", "'wght' 700");
		$("div.mp1c span").css("color", "#888");
		$("div.mp1c span.700").css("color", "#DDD");
		$("div.mp1c span.selected_weight").text("Bold 700");
	});
});

/*-- M PLUS CODE LATIN 50/60 ------------------------------------------------ */

$(function(){
	$("div.mpcl span.100").hover(function(){
		$("span.mpluscodelatin50").css("font-variation-settings", "'wght' 100, 'wdth' 100");
		$("span.mpluscodelatin60").css("font-variation-settings", "'wght' 100, 'wdth' 125");
		$("div.mpcl span").css("color", "#888");
		$("div.mpcl span.100").css("color", "#DDD");
		$("div.mpcl span.selected_weight").text("Thin 100");
	});
});

$(function(){
	$("div.mpcl span.200").hover(function(){
		$("span.mpluscodelatin50").css("font-variation-settings", "'wght' 200, 'wdth' 100");
		$("span.mpluscodelatin60").css("font-variation-settings", "'wght' 200, 'wdth' 125");
		$("div.mpcl span").css("color", "#888");
		$("div.mpcl span.200").css("color", "#DDD");
		$("div.mpcl span.selected_weight").text("Extra-light 200");
	});
});

$(function(){
	$("div.mpcl span.300").hover(function(){
		$("span.mpluscodelatin50").css("font-variation-settings", "'wght' 300, 'wdth' 100");
		$("span.mpluscodelatin60").css("font-variation-settings", "'wght' 300, 'wdth' 125");
		$("div.mpcl span").css("color", "#888");
		$("div.mpcl span.300").css("color", "#DDD");
		$("div.mpcl span.selected_weight").text("Light 300");
	});
});

$(function(){
	$("div.mpcl span.400").hover(function(){
		$("span.mpluscodelatin50").css("font-variation-settings", "'wght' 400, 'wdth' 100");
		$("span.mpluscodelatin60").css("font-variation-settings", "'wght' 400, 'wdth' 125");
		$("div.mpcl span").css("color", "#888");
		$("div.mpcl span.400").css("color", "#DDD");
		$("div.mpcl span.selected_weight").text("Regular 400");
	});
});

$(function(){
	$("div.mpcl span.500").hover(function(){
		$("span.mpluscodelatin50").css("font-variation-settings", "'wght' 500, 'wdth' 100");
		$("span.mpluscodelatin60").css("font-variation-settings", "'wght' 500, 'wdth' 125");
		$("div.mpcl span").css("color", "#888");
		$("div.mpcl span.500").css("color", "#DDD");
		$("div.mpcl span.selected_weight").text("Medium 500");
	});
});

$(function(){
	$("div.mpcl span.600").hover(function(){
		$("span.mpluscodelatin50").css("font-variation-settings", "'wght' 600, 'wdth' 100");
		$("span.mpluscodelatin60").css("font-variation-settings", "'wght' 600, 'wdth' 125");
		$("div.mpcl span").css("color", "#888");
		$("div.mpcl span.600").css("color", "#DDD");
		$("div.mpcl span.selected_weight").text("Semi-bold 600");
	});
});

$(function(){
	$("div.mpcl span.700").hover(function(){
		$("span.mpluscodelatin50").css("font-variation-settings", "'wght' 700, 'wdth' 100");
		$("span.mpluscodelatin60").css("font-variation-settings", "'wght' 700, 'wdth' 125");
		$("div.mpcl span").css("color", "#888");
		$("div.mpcl span.700").css("color", "#DDD");
		$("div.mpcl span.selected_weight").text("Bold 700");
	});
});
