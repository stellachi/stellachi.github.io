//水平選單 吸住=========================================================
$(function(){

	//主選單///////////////////////////////////////////////////
	var $mainNav = $('.forum_menu');
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
});


 // nav sub menu
//$(function(){
//    $('.forum_menu.original, .forum_menu.clone').find('li').hover(function(){
//       if($(this).has('.sub')){
//	        var leftvalue = $(this).position().left;
//	        $(this).find('.sub').css({display:'block', left: leftvalue})
//	    }
//	},function(){
//	    $(this).find('.sub').css({display:'none'})
//    })
//})





//判斷網址帶hash，變scroll位置=========================================================
//$(function(){
//
//	var top;
//	var target = $("#target").length;
//
//	if ( window.location.hash==="#target" && target!==0) {
//		top = $('#target').offset().top - 50 ;
//		$('body, html').animate({scrollTop: top}, 1000);
//	}
//
//});

//圖輯 gallery========================================================
//$(function(){
//	$(".gallery_1").find(".piece:not(:has(img))").remove();
//	if ( $("div").hasClass("gallery_1") ){
//		/* gallery_1 套 owl-carousel*/	
//		var Gallery =['.gallery_1'];
//		var owl = $('.owl-carousel');
//		
//		$.each(Gallery,function(i,id){
//			$(id).find(owl).owlCarousel({
//				center: true,
//				items:3,
//				loop:true,
//				smartSpeed:450,
//				autoplay:true,
//				nav: true,
//				margin:0,
//				autoWidth:true,
//			});
//			
//			$(id).find(owl).on('translate.owl.carousel', function(event){
//				$(id).find('.owl-item').removeClass('style');
//				 var i = event.item.index;
//				$(id).find('.owl-item').eq(i).addClass('style');			
//			});
//		
//			$(id).find(owl).on('initialized.owl.carousel', function(event){
//				$('.center').addClass('style');
//				var itemCount = event.page.count;
//				$('.gallery_1 .owl-dot span').css({'width':(700/itemCount) +'px'});
//			});
//	
//		});
//			
//		// 圖集按鈕hover效果
//		$(document).on('hover','.owl-dot',function(){
//			var position = $(this).index();
//			owl.trigger('to.owl.carousel',[position, 300]);
//		});
//		
//		// 取出標題並插入結構
//		var htmlTitle , sTitle, sSrc = "";
//		$(".gallery_1 .inner .piece").each(function(){
//			sTitle = $(this).find("img").attr("title");
//			sSrc = $(this).find("a").attr("href");
//			htmlTitle = '<h3><a href="'+ sSrc +'">'+ sTitle +'</a>';
//			$(this).append(htmlTitle);
//		});
//	}
//	
//});



//讓捲軸用動畫的方式移動到到指定id位罝 news.htm======================
$(function(){
	$(".scrollgo").click(function(){
		var sGoTo = $(this).attr("rel"); //取得目標物的id class
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({
			scrollTop: $(sGoTo).offset().top-100
		}, 500);
		return false;
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
		})
	}
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
	});

	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 1000);
		return false;
	});
//---
});



// 模組 模組 新聞內頁 分享按鈕=========
$(function(){
	var iPoint = 500;
	var iWinScrollT;
	var oScrollTimer = null;
	$(window).on("scroll", function(){
		if( $("body.news-page").length > 0 ){ //新聞內頁
			if (oScrollTimer) {
				clearTimeout(oScrollTimer);
			};
			oScrollTimer = setTimeout(function () {
				iWinScrollT = $(window).scrollTop();
				if (iWinScrollT > iPoint) {
					$("#et_sticky_pc").css({"height": "500px"});
				} else {
					$("#et_sticky_pc").css({"height": "0px"});
				};
			}, 100);
		}
	});

	//拷貝連結
	$(".link").click(function(){
		var $temp = $("<input>"); //暫放網址用
		$("body").append($temp);
		$temp.val(window.location.href).select();
		document.execCommand("copy");
		$temp.remove(); //移除
	});
	
});

