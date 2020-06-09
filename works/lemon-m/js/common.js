////水平選單 吸住=========================================================
$(function(){
	
	 //主選單///////////////////////////////////////////////////
	var $mainNav = $('.lemon_menu');
	var top = $mainNav.offset().top;	
	var pos = $mainNav.find('.current').length ? $mainNav.find('.current').offset().left : 0;

	$mainNav.addClass('original').clone().insertAfter($mainNav).addClass('clone').removeClass('original');
	$('.original, .clone').find('.inner').scrollLeft(pos);
	var scrollInterval = setInterval(stick, 10);

	function stick(){
		var orgTop = $mainNav.offset().top; 
		if ($(window).scrollTop() >= (orgTop)){
			$('.clone').show();
			$('.original').css('visibility','hidden');
		}else{
			$('.clone').hide();
			$('.original').css('visibility','visible');
		}
	}
	
})


//置頂吸住===========================
/*
1. 新聞內頁：麵包屑+社群分享
2. 非新聞內頁：主選單
*/
$(function(){

	var iNav_2Point = parseInt( $(".lemon_menu").offset().top );
	var iWinScrollT;
	var oScrollTimer = null;

	//主選單///////////////////////////////////////////////////
	var $mainNav = $('.lemon_menu');
	var $header = $('.header');

	if( $("body.news-page").length > 0 ){ //新聞內頁
		
		$("#et_sticky").append($(".sharebox_1").clone());

		$(window).on("scroll", function () {
			if (oScrollTimer) {
				clearTimeout(oScrollTimer);
			};
			oScrollTimer = setTimeout(function () {
				iWinScrollT = $(window).scrollTop()
				if (iWinScrollT > iNav_2Point) {
					$("#et_sticky").css('top', '0')
				} else {
					$("#et_sticky").css('top', '-300px')
				}
			}, 100)
		})
	}else{ //非新聞內頁
		$header.addClass('original').clone().insertAfter($header).addClass('clone').removeClass('original');

		function stick() {
			var orgTop = $mainNav.offset().top; 
			if ($(window).scrollTop() >= (orgTop)){
				$('.clone').show();
				$('.original').css('visibility','hidden')
			}else{
				$('.clone').hide();
				$('.original').css('visibility','visible')
			}
		}

		$(window).scroll(function(){
			stick();
		 })
	}
	
})


 // nav sub menu
$(function(){
    $('.lemon_menu.original, .lemon_menu.clone').find('li').hover(function(){
       if($(this).has('.sub')){
	        var leftvalue = $(this).position().left;
	        $(this).find('.sub').css({display:'block', left: leftvalue})
	    }
	},function(){
	    $(this).find('.sub').css({display:'none'})
    })
})



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

//operate_1 操作 =======================
$(function(){

	var index;
	var left;
	var $menu = $(".operate_1 li")          //選單
	var $content = $(".operate_1 .content")  //內容
	var $caret = $(".operate_1 .caret")     //箭頭

	$menu.on("click", function(){

		$menu.find("span").fadeIn()

		index = $(this).index()
		$content.find(".item").hide().eq(index).show()
		$content.slideDown()

		//left = 100 * index;
		//$caret.fadeIn().css({"left":left+"px"})

	})
})

// gototop 模組======================================
$(function(){
	var $goToTop = $(".gototop");
	var $m = $('.part_menu_2 a')
	var iScrollPointA = 0;  //回到某一個點
	var iScrollPointB = 150;  //滾到某一個點

	$(window).scroll(function(){
		if( $(window).scrollTop() > iScrollPointB) {
			$goToTop.css({display:'block'});
			$m.css({display:'block'});
		} else {
			$goToTop.css({display:'none'});
			$m.css({display:'none'});
		}
	})

	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 1000);
		return false;
	})

})


//讓捲軸用動畫的方式移動到到指定id位罝 news.htm======================
$(function(){
	$(".scrollgo").click(function(){
		var sGoTo = $(this).attr("rel") //取得目標物的id class
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body') //修正 Opera 問題
		$body.animate({
			scrollTop: $(sGoTo).offset().top-600
		}, 500);
		return false;
	})
})





//首頁-主打星輪播========================================================
$(function(){
	//$(".gallery_1").find(".piece:not(:has(img))").remove();
	//首頁---------------
	if( $(".gallery_1").length > 0 ){
		$('.gallery_1 .run .inner').bxSlider({
			controls : true,
			//randomStart : true,  //亂數初始張
			mode : 'horizontal', //轉場效果
			//captions : true,     //標題
			auto : true,         //自動輪播
			pause : 3000,		 //單張停留時間
			//adaptiveHeight: true,//自適應高
			//useCSS:false,        //換成jquery animate,修正chrome動畫bug
			
			onSliderLoad : function(){
			   $(".gallery_1 .run .inner .piece img").show(); //載入後再顯示圖
			}
		})
	}
})


//首頁-發現作者-換作者者
$(function(){

	
	$('.change').click(function(){
//		$(this).removeClass('change').addClass('change2')
		$('.part_pictxt_5').css({display:'none'})
		$('.s').css({display:'block'})
	})
	

	
})










