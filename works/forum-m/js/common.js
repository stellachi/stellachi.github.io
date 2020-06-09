//水平選單置頂吸住===========================
/*
1. 新聞內頁：麵包屑+社群分享
2. 非新聞內頁：主選單
*/
$(function(){

	var iNav_2Point = parseInt( $(".forum_menu").offset().top );
	var iWinScrollT;
	var oScrollTimer = null;

	//主選單///////////////////////////////////////////////////
	var $mainNav = $('.forum_menu');
	var $header = $('.header');

	if( $("body.news-page").length > 0 ){ //新聞內頁
		
		$("#et_sticky").append($(".sharebox_1").clone());

		$(window).on("scroll", function () {
			if (oScrollTimer) {
				clearTimeout(oScrollTimer);
			};
			oScrollTimer = setTimeout(function () {
				iWinScrollT = $(window).scrollTop();
				if (iWinScrollT > iNav_2Point) {
					$("#et_sticky").css('top', '0');
//					$mainNav.removeClass("clone")
				} else {
					$("#et_sticky").css('top', '-300px');
//					$mainNav.addClass("clone")
//					$header.css('display','block')
				}
			}, 100);
		});
	}else{ //非新聞內頁

		
//		var $mainNav = $('.header');
//		var top = $mainNav.offset().top;	
//		var pos = $mainNav.find('.current').length ? $mainNav.find('.current').offset().left : 0;
//
//		$mainNav.addClass('original').clone().insertAfter($mainNav).addClass('clone').removeClass('original');
//		$('.original, .clone').find('.inner').scrollLeft(pos);
//		var scrollInterval = setInterval(stick, 10);
//
//		function stick(){
//			var orgTop = $mainNav.offset().top; 
//			if ($(window).scrollTop() >= (orgTop)){
//				$('.clone').show();
//				$('.original').css('visibility','hidden');
//			}else{
//				$('.clone').hide();
//				$('.original').css('visibility','visible');
//			}
//		}
	}
	
});


 // nav sub menu
//$(function(){
//    $('.lemon_menu.original, .lemon_menu.clone').find('li').hover(function(){
//       if($(this).has('.sub')){
//	        var leftvalue = $(this).position().left;
//	        $(this).find('.sub').css({display:'block', left: leftvalue})
//	    }
//	},function(){
//	    $(this).find('.sub').css({display:'none'})
//    })
//})



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
	}
	
	//fn 關
	function fnSearchClose(){
		$(".search .icon_open").show();
		$(".search .icon_close").hide();
		$(".logo_ettoday").show();
		$("#cse-search-box .keyword").animate({"width":"0px","padding-left":"0px"},300).hide();
	}
	
	//開啟搜尋 fn 開
	$(".search .icon_open").on("click", fnSearchOpen)
	
	//送出搜尋 fn 關
	$(".search .icon_close").on("click", fnSearchClose)
	
	//trigger 送出搜尋值
	$(".search .icon_close").on("click", function(){
		$("#cse-search-box .send").trigger("click");
	})
	
	//blur搜尋框內無搜尋字 fn 關
	$("#cse-search-box .keyword").on("blur", function(){
		if($("#cse-search-box .keyword").val() == ""){
			fnSearchClose();
		}
	})
})

//讓捲軸用動畫的方式移動到到指定id位罝 news.htm======================
$(function(){
	$(".scrollgo").click(function(){
		var sGoTo = $(this).attr("rel"); //取得目標物的id class
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({
			scrollTop: $(sGoTo).offset().top-100
		}, 500);
		return false;
	})
})


// gototop 模組======================================
$(function(){
	var $goToTop = $(".gototop");
	var iScrollPointA = 0;  //回到某一個點
	var iScrollPointB = 150;  //滾到某一個點

	$(window).scroll(function(){
		if( $(window).scrollTop() > iScrollPointB) {
			$goToTop.show();
		} else {
			$goToTop.hide();
		}
	})

	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 1000);
		return false;
	})

})

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
		})
	}
})


//改變文字大小===========================
$(function(){

 var listCookieName = "w7";//定義cookie名稱
 
 //初始高亮
 $(".font_size_switch a").eq(0).addClass("current");
 
 $(".font_size_switch a").click(function(e){
  e.preventDefault();
  var sSize = $(this).attr("class");
  $(this).addClass("current").siblings().removeClass("current");
  $(".subject_article").removeClass("size_s size_m size_l").addClass(sSize);
  $.cookie(listCookieName, sSize, {expires: 365}); //覆蓋掉cookie紀錄
 })
 
 //初始偵測
 if($.cookie(listCookieName)) {  //如果電腦有cookie紀錄
  var sSize = $.cookie(listCookieName);
  $(".font_size_switch ."+ sSize).addClass("current").siblings().removeClass("current");
  $(".subject_article").addClass( sSize );
    }
 
 
})


//選單current
//window.onload=function(){
//	
//	var $tabBtn = $('.forum_menu>.inner>li>a');
//	
//	
//	$tabBtn.click(function(){
//		
//		var $l = $(this).attr('href')
//		//alert($l)
//		//alert($(this).parent('li').index())
//		
//		window.location = $l+alert('jj')//eq($(this).parent('li').index()).find('a').css({color:"red"})//.addClass('current').end().siblings().removeClass('current');
//		
//		
//		//alert(t)
//		//$('.forum_menu>.inner>li').eq($tabBtn.parent('li').index()).find('a').addClass('current').end().siblings().removeClass('current');
//		
//		
//	})//.eq($(this).parent('li').index()).text()
//	
////	alert($(this).parent('li').index())
//	
//	//
//		
//	
//	
//	return false;
//	
//	//
//	//	console.log("jj")
//	//	e.preventDefault();	
//	
//}





