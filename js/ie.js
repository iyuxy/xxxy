$(document).ready(function() {
	var bar=$(".qiehuan").find("p");
	bar.eq(0).click(function(){
		$(".picnews").animate({marginLeft:"0%"});
		$(this).removeClass('barunactive');
		$(this).addClass('baractive');
		bar.eq(1).removeClass('baractive');
		bar.eq(1).addClass('barunactive');
		});
	bar.eq(1).click(function(){
		$(".picnews").animate({marginLeft:"-110%"});
		$(this).removeClass('barunactive');
		$(this).addClass('baractive');
		bar.eq(0).removeClass('baractive');
		bar.eq(0).addClass('barunactive');
		})
    
});