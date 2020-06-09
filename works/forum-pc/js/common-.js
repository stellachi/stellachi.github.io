//水平選單 吸住=========================================================
$(function(){
	
	$(window).scrollTop(0); //先滾回最上，以求正確計算nav位移
	$(".wrapper").append($(".house_menu").clone());
	
	$(".house_menu").eq(0).addClass("nav_ori");
	$(".house_menu").eq(1).addClass("nav_clone");
	
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




//輪播========================================================
$(function(){
	$(".gallery_1").find(".piece:not(:has(img))").remove();
	//首頁---------------
	if( $(".gallery_1").length > 0 ){
		$('.gallery_1 .run .inner').bxSlider({
			controls : true,
			randomStart : true,  //亂數初始張
			mode : 'horizontal', //轉場效果
			captions : true,     //標題
			auto : true,         //自動輪播
			pause : 3000,		 //單張停留時間
			adaptiveHeight: true,//自適應高
			useCSS:false,        //換成jquery animate,修正chrome動畫bug
			onSliderLoad : function(){
			   $(".gallery_1 .run .inner .piece img").show(); //載入後再顯示圖
			}
		});
	};
	
	
	
});


$(function(){
	
	$('.gallery_2 .run .inner').bxSlider({  
		slideWidth:700
	});
	
});

