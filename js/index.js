$(document).ready(function() {
	var arraymonth=new Array()
	var arrayday=new Array()
	$(".newscontent div").each(function(i){
	 var vlaue=$(this).text();
	 divide=vlaue.split("-");
     arraymonth[i]=divide[0]+"年"+divide[1]+"月";
	 arrayday[i]=divide[2]+"日";
	 $(this).css({display:'none'});
    });
	$(".newstime .month1").each(function(i){
		$(this).html(arraymonth[i]);
		});
	$(".newstime .day").each(function(i){
		$(this).html(arrayday[i]);
		});
	//////
var myDate = new Date();
var shuzi=myDate.getSeconds(); 
	switch(shuzi%3){
		case 0: $(".infobg").css({background:'url(./images/infobg2.jpg) no-repeat'});break;
		case 1: $(".infobg").css({background:'url(./images/infobg3.jpg) no-repeat'});break;
		case 2: $(".infobg").css({background:'url(./images/infobg4.jpg) no-repeat'});break;
		}
	/////
	var listweihzi=$("#dangqinaweihzi").find("a");
	var listname=listweihzi.eq(2).html();
	$(".titlename").html(listname);
	//////
	flag=0;
	var int=setInterval("dsq(flag)",5000)
	var bar=$(".tabbar").find("p");
	bar.eq(0).click(function(){
		clearInterval(int);
		$(".picnews").animate({marginLeft:"0%"});
		$(this).removeClass('barunactive');
		$(this).addClass('baractive');
		bar.eq(1).removeClass('baractive');
		bar.eq(1).addClass('barunactive');
		flag=1;
		int=setInterval("dsq(flag)",5000);
		});
	bar.eq(1).click(function(){
		clearInterval(int);
		$(".picnews").animate({marginLeft:"-100%"});
		$(this).removeClass('barunactive');
		$(this).addClass('baractive');
		bar.eq(0).removeClass('baractive');
		bar.eq(0).addClass('barunactive');
		flag=0;
		int=setInterval("dsq(flag)",5000);
		})
	///////////图片新闻轮播结束//////////
	$
});
function dsq(id){
	var bar=$(".tabbar").find("p");
	if(id==0){
	   $(".picnews").animate({marginLeft:"-100%"});
	   	bar.eq(1).removeClass('barunactive');
		bar.eq(1).addClass('baractive');
		bar.eq(0).removeClass('baractive');
		bar.eq(0).addClass('barunactive');
	  	flag=1;
		}
	if(id==1){
		$(".picnews").animate({marginLeft:"0%"});
		bar.eq(0).removeClass('barunactive');
		bar.eq(0).addClass('baractive');
		bar.eq(1).removeClass('baractive');
		bar.eq(1).addClass('barunactive');
		flag=0;
		}
	}
//设为首页和加为收藏的代码开始
function SetHome(obj){ 
	try{ 
		obj.style.behavior='url(#default#homepage)';obj.setHomePage('https://www.iyuxy.com/'); 
		} 
	catch(e){ 
		if(window.netscape) { 
						try { 
							netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
							} 
	catch (e) { 
				alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。"); 
				} 
	var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
	prefs.setCharPref('browser.startup.homepage','https://www.iyuxy.com/'); 
	}else{ 
			alert("您的浏览器不支持，请按照下面步骤操作：\n1.打开浏览器设置。\n2.点击设置网页。\n3.输入："+'https://www.iyuxy.com/'+"点击确定。"); 
			} 
		} 
	} 
function shoucang(){ 
	try{ 
		window.external.addFavorite('https://www.iyuxy.com/','喻小右'); 
		} 
	catch (e){ 
			try{ 
				window.sidebar.addPanel('https://www.iyuxy.com/','喻小右', ""); 
				} 
	catch (e){ 
			alert("加入收藏失败，请使用Ctrl+D进行添加"); 
			} 
		} 
	} 
//设为首页和加为收藏的代码结