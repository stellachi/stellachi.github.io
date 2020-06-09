// JavaScript Document

//水平選單 吸住=========================================================
$(function(){
	
	$(window).scrollTop(0); //先滾回最上，以求正確計算nav位移
	$(".wrapper").append($(".main_nav").clone());
	
	$(".main_nav").eq(0).addClass("nav_ori");
	$(".main_nav").eq(1).addClass("nav_clone");
	
	//吸住==================
	
	var iNav_2Point = parseInt( $(".nav_ori").offset().top );
	var iWinScrollT; 
	
		
	var oScrollTimer = null;
	$(window).on("scroll", function(){
		if(oScrollTimer){
			clearTimeout(oScrollTimer);
		};
		oScrollTimer = setTimeout(function(){
							iWinScrollT = $(window).scrollTop();
							if( iWinScrollT > iNav_2Point ){
								$(".nav_ori").stop().hide();
								$(".nav_clone").fadeIn();
							}else{
								$(".nav_ori").fadeIn();
								$(".nav_clone").stop().fadeOut(10);
							};
						}, 0);
	});
	
	
	
});



