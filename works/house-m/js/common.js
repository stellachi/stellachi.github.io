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



//大圖輪播========================================================
$(function(){
	$(".gallery_1").find(".piece:not(:has(img))").remove();
	$(".gallery_1 .run .inner").bxSlider({  
		slideWidth:640,
		auto:true,
		pause:3000,
		autoDelay:3000,
		captions:true,
		pager:false,
		mode:"fade",
		randomStart:true,  
		onSliderLoad : function(){
			$(".gallery_1").css({height:"auto"});
			$(".gallery_1 .run .inner .piece img").show();
		}
	});
	
	
});


$(function(){
	
	$('.gallery_2 .run .inner').bxSlider({  
	   slideWidth:640,
	   adaptiveHeight: true,
		
		auto:true,
		pause:3000,
		autoDelay:3000,
		captions:true,
		pager:false,
		mode:"fade",
		randomStart:true,  
		onSliderLoad : function(){
			$(".gallery_2").css({height:"auto"});
			$(".gallery_2 .run .inner .piece img").show();
		}
		
	});
	
});

$(function(){
	
	$('.gallery_3 .run .inner').bxSlider({  
	   slideWidth:640,
	   adaptiveHeight: true,
		
		auto:true,
		pause:3000,
		autoDelay:3000,
		captions:true,
		pager:false,
		mode:"fade",
		randomStart:true,  
		onSliderLoad : function(){
			$(".gallery_3").css({height:"auto"});
			$(".gallery_3 .run .inner .piece img").show();
		}
		
	});
	
});





//搜尋=====================================
$(window).load(function(){
 
	//隱藏送出input，統一由.icon_close控制
	$("#cse-search-box .send").hide();
	
	//fn 開
	function fnSearchOpen(){
		$(".search .icon_open").hide();
		$(".search .icon_close").show();
		$(".logo_ettoday").hide();
		$("#cse-search-box .keyword").val('').show().animate({"width":"180px","padding-left":"10px"},300).focus();
	};
	
	//fn 關
	function fnSearchClose(){
		$(".search .icon_open").show();
		$(".search .icon_close").hide();
		$(".logo_ettoday").show();
		$("#cse-search-box .keyword").animate({"width":"0px","padding-left":"0px"},300).hide();
	};
	
	//開啟搜尋 fn 開
	$(".search .icon_open").on("click", fnSearchOpen);
	
	//送出搜尋 fn 關
	$(".search .icon_close").on("click", fnSearchClose);
	
	//trigger 送出搜尋值
	$(".search .icon_close").on("click", function(){
		$("#cse-search-box .send").trigger("click");
	});
	
	//blur搜尋框內無搜尋字 fn 關
	$("#cse-search-box .keyword").on("blur", function(){
		if($("#cse-search-box .keyword").val() == ""){
			fnSearchClose();
		};
	});
});


//改變文字大小===========================
$(function(){

 var listCookieName = "w7";//定義cookie名稱
 
 //初始高亮
 $(".font_size_switch a").eq(0).addClass("current");
 
 $(".font_size_switch a").click(function(e){
  e.preventDefault();
  var sSize = $(this).attr("class");
  $(this).addClass("current").siblings().removeClass("current");
  $(".subjcet_news").removeClass("size_s size_m size_l").addClass(sSize);
  $.cookie(listCookieName, sSize, {expires: 365}); //覆蓋掉cookie紀錄
 });
 
 //初始偵測
 if($.cookie(listCookieName)) {  //如果電腦有cookie紀錄
  var sSize = $.cookie(listCookieName);
  $(".font_size_switch ."+ sSize).addClass("current").siblings().removeClass("current");
  $(".subjcet_news").addClass( sSize );
    };
 
 
});




