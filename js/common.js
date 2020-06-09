// JavaScript Document

//TECHNICAL SKILLS頁籤======================================
$(function () {

	$(".part > h3 > .topic").click(function () {
		var n = this.id.substr(1);
		$(".topic").not("#t" + n).css({
			background: "#f9f9f9",
			color: "#000"
		})
		$("#t" + n).css({
			background: "#000",
			color: "#fff"
		})
		$(".tab>.inner").hide();
		//$(".skill").find('.inner').hide();
		$("#content" + n).show();
		return false;
	})

})


// gototop 模組======================================
$(function () {
	var $goToTop = $(".gototop");
	var iScrollPointA = 0; //回到某一個點
	var iScrollPointB = 150; //滾到某一個點

	$(window).scroll(function () {
		if ($(window).scrollTop() > iScrollPointB) {
			$goToTop.fadeIn(500);
		} else {
			$goToTop.fadeOut(500);
		}
	})

	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function () {
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({
			scrollTop: iScrollPointA
		}, 1000);
		return false;
	});

})



//讓捲軸用動畫的方式移動到到指定id位罝======================================
$(function () {
	$(".scrollgo").click(function () {
		var sGoTo = $(this).attr("rel"); //取得目標物的id class
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({
			scrollTop: $(sGoTo).offset().top - 50
		}, 1000)
		return false;
	})
})




// 側選單============================
$(function () {
	//開
	$(".side_open").on("click", function () {
		$(".side_menu").css({
			transform: "translateY(0%)"
		})
		$("*").css({
			overflow: "hidden"
		})
	})
	//關
	$(".side_close").on("click", function () {
		$(".side_menu").css({
			transform: "translateY(-120%)"
		})
		$("html,body").css({
			overflow: "auto"
		})
	})

	//非選單區塊
	$(".side_menu").not("li").on("click", function () {
		$(".side_menu").css({
			transform: "translateY(-120%)"
		})
		$("html,body").css({
			overflow: "auto"
		})
	})

	//選單
	$(".side_menu>.menu>li>a").on("click", function () {
		$("html,body").css({
			overflow: "auto"
		})

		setTimeout(function () {
			$(".side_menu").css({
				transform: "translateY(-120%)"
			});
		}, 200)
		return false;

	})
})



// LATEST WORKS============================
$(function () {

	$(".part_pictxt_1 > .piece").hover(function () {
		//console.log("hi")
		$(this).stop().delay(300).animate({
			top: -100
		}, 900);
	}, function () {
		$(this).stop().delay(300).animate({
			top: 0
		}, 200, "easeOutCubic");
	})

})


//大圖輪播========================================================
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
			pager: false,
		//	slideWidth:1000,
			onSliderLoad : function(){
				$(".gallery_1 .run .inner .piece img").show(); //載入後再顯示圖
		 }
		})
	}
})