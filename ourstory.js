 $(function() {
			  $("a:has(img.gallery)").click(function() {
            var largePath = $(this).attr("href");
            var caption = $(this).attr("title");

            $("#photo_large").attr({ src: largePath });
            $("#caption1").text(caption);
            return false;
        });
			setTimeout(function() {startShow()}, 2000);
		
		});
		
function startShow() {
	$("#loading").animate({opacity: "0.0"}, 300);
	$("div#brady").animate({left: "50px"}, 300).css("border", "10px solid #11EF16");
	$("#greenTalk").animate({opacity: "1.0", left: "200px"}, 300);
	$("div#greenTalk").text("You are");
	
	setTimeout(function() {
		$("div#greenTalk").text("my fire");
		$("div#greenTalk").css("color", "red");
	}, 1500);
	
	setTimeout(function() {
		$("div#greenTalk").animate({opacity: "0.0"}, 300);
		$("div#brady").css("border", "10px solid transparent");
		$("div#ashley").animate({right: "50px"}, 300).css("border","10px solid #E2006F");
		$("#pinkTalk").animate({opacity: "1.0", right: "200px"}, 300);
		$("div#pinkTalk").text("The one");
	}, 3500);
	
	setTimeout(function() {
		$("div#pinkTalk").text("DESIRE");
		$("div#pinkTalk").css("color", "#11EFD7");
	}, 5000);
	
	setTimeout(function() {
		$("div#pinkTalk").animate({opacity: "0.0"}, 300);
		$("div#ashley").css("border", "10px solid transparent");
		$("#believe").animate({opacity: "1.0"}, 2000);
		$("div#ashley, div#brady").animate({opacity: "0.0"}, 2000);
	}, 7000);
	
	setTimeout(function() {
		$("div#believe").animate({opacity: "0.0"}, 500);
		$("#brady").animate({top: "150px", left: "160px", opacity: "1.0"}, 500).css("border","10px solid #11EF16");
		$("#ashley").animate({top: "150px", right: "160px", opacity: "1.0"}, 500).css("border","10px solid #E2006F");
		$("#hearts").animate({opacity: "1.0"}, 1000);
	}, 10000);

}