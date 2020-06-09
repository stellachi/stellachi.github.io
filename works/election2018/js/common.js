//防止被 iframe
/**/
if (top.location !== self.location && document.referrer.search("ettoday.net") < 0) {
	//top.location.href = window.location.href
	top.location.href = 'http://www.ettoday.net'+window.location.pathname;
}

//11月23日 刪除================================================
// $(function (){
// 	$(".nav_1 a.btn_1").on("click",function(){
// 		alert("決戰11月24日! 當日下午16:00準時開票，敬請期待!!!");
// 	});
// });

//活動大比拼 延期
// $(function (){
// 	$(".nav_1 a.btn_6").on("click",function(){
// 		alert("活動尚未開始，敬請期待哦!");
// 	});
// });

// 倒數計時器======================================
$(function () {

	var $Counter_1 = $('#counter_1');

	//結束時間
	var iEndPoint = new Date(2019, 11-1, 24, 8, 00, 00); //到期日
	var iNowTime = new Date();
	var iPoint_1 = 1000*60*60*24; //1秒=1000毫秒 1分=60秒 1小時=60分 1天= 24小時

	if( iEndPoint.getTime() - iNowTime.getTime() < iPoint_1 ){ //小於一天
		$Counter_1.addClass('style_1');
	}

	//到期fn
	function fnExpiryAction() {
		$Counter_1.hide();
	}

	$Counter_1.countdown({
		until: iEndPoint, //結束時間
		layout: $Counter_1.html(), //時間結構
		alwaysExpire: true, //過期也執行
		onExpiry: fnExpiryAction, //到期fn
		format: 'DHMS' //時間項目
	})


})

//tab換資料 history-2014six.htm history-2014others.htm========================
$(function(){
	var $tabBtn = $('#tab_2 .tab_title a');
	var $tabContent = $('#tab_2 .tab_content');
	
	//初始
	$tabContent.load($tabBtn.eq(0).attr('href'));
	$tabBtn.eq(0).addClass('current');
	
	$tabBtn.click(function(e){
		$(this).addClass('current').siblings().removeClass('current');
		$tabContent.load($(this).attr('href'));
		location.hash = $(this).index();
		e.preventDefault();
	}).eq(location.hash.substr(1)).click();
	

});

// table_1 模組======================================
$(function(){
	var aArray = [ ];
	
	$(".table_1 tr:nth-of-type(1) th").each(function(){
		var aTxt = $(this).html();
		aArray.push(aTxt);
	});
	
	
	$(".table_1 tr").slice(1).each(function(){
		$(this).find("td").each(function(i){
			$(this).prepend("<span>"+ aArray[i] +"： </span>");
		});
	});
});

// table_2 模組======================================
$(function(){
	var aArray = [ ];
	
	$(".table_2 tr:nth-of-type(1) th").each(function(){
		var aTxt = $(this).html();
		aArray.push(aTxt);
	});
	
	
	$(".table_2 tr").slice(1).each(function(){
		$(this).find("td").each(function(i){
			$(this).prepend("<span>"+ aArray[i] +"： </span>");
		});
	});
});

// gototop 模組======================================
$(function(){
	var $goToTop = $(".gototop");
	var iScrollPointA = 0;  //滾回的位置
	var iScrollPointB = 20; //滾到的位置 出現gototop

	//滾動事件
	var oScrollTimer = null;
	$(window).on("scroll", function(){
		if(oScrollTimer){
			clearTimeout(oScrollTimer);
		}
		oScrollTimer = setTimeout(function(){
							if( $(window).scrollTop() > iScrollPointB) {
								$goToTop.show();	
							} else {
								$goToTop.hide();	
							}
						}, 50);
	});
	
	// 讓捲軸用動畫的方式移動到到指定id位罝
	$goToTop.on("click", function(){
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 50);
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
		if (oScrollTimer) {
			clearTimeout(oScrollTimer);
		}
		oScrollTimer = setTimeout(function () {
			iWinScrollT = $(window).scrollTop();
			if (iWinScrollT > iPoint) {
				$("#et_sticky_pc").css({"height": "500px"});
			} else {
				$("#et_sticky_pc").css({"height": "0px"});
			}
		}, 100);
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

//// 以下GA TrackEvent 點擊追蹤
//$(function(){
//	
//	//版頭-topbar
//	$(".topbar a").click(function(){
//		ga("election2018.send", "event", "版頭-topbar", ""+ $(this).text() +"");
//	});
//	
//	//版頭-logo
//	$(".logo_election a").click(function(){
//		ga("election2018.send", "event", "版頭-logo", ""+ $(this).text() +"");
//	});
//	
//	//版頭-主選單
//	$(".header .nav_1 a").click(function(){
//		ga("election2018.send", "event", "版頭-主選單", ""+ $(this).text() +"");
//	});
//	
//	//左側社群按鈕：回首頁
//	$("#et_sticky_pc a.logo").click(function(){
//	  ga("election2018.send", "event", "左側社群分享", "回首頁",""+self.location.href+"");
//	});	
//	
//	//左側社群按鈕：Facebook
//	$("#et_sticky_pc a.fb").click(function(){
//	  ga("election2018.send", "event", "左側社群分享", "Facebook-share",""+self.location.href+"");
//	});	
//	
//	//左側社群按鈕：Weibo
//	$("#et_sticky_pc a.weibo").click(function(){
//	  ga("election2018.send", "event", "左側社群分享", "Weibo-share",""+self.location.href+"");
//	});	
//	
//	//左側社群按鈕：Twitter
//	$("#et_sticky_pc a.twitter").click(function(){
//	  ga("election2018.send", "event", "左側社群分享", "Twitter-share",""+self.location.href+"");
//	});	
//	
//	//左側社群按鈕：GooglePlus
//	$("#et_sticky_pc a.gplus").click(function(){
//	  ga("election2018.send", "event", "左側社群分享", "GooglePlus-share",""+self.location.href+"");
//	});	
//	
//	//左側社群按鈕：Copylink
//	$("#et_sticky_pc a.link").click(function(){
//	  ga("election2018.send", "event", "左側社群分享", "Copylink",""+self.location.href+"");
//	});	
//	
//	//首頁-各縣市選單
//	$("#a4 .part_btn_3 li a").click(function(){
//		ga("election2018.send", "event", "首頁-各縣市選單", ""+ $(this).text() +"");
//	});
//	
//	//新聞總覽頁-各縣市選單
//	$("#a1 .part_btn_3 li a").click(function(){
//		ga("election2018.send", "event", "新聞總覽頁-各縣市選單", ""+ $(this).text() +"");
//	});
//	
//	//六都選情頁-各縣市選單
//	$("#a5 .part_btn_2 a").click(function(){
//		ga("election2018.send", "event", "六都選情頁-各縣市選單", ""+ $(this).text() +"");
//	});
//	
//	//其他選情頁-各縣市選單
//	$("#a5 .part_btn_6 a").click(function(){
//		ga("election2018.send", "event", "其他選情頁-各縣市選單", ""+ $(this).text() +"");
//	});	
//	
//});


//stella========================================================================================

// index.htm 輪播
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


// ballotReport.htm 瀑布流
$('.piece a.btn').click(function() { 
	$('.part_txt_1').masonry({        
	itemSelector: '.piece',
	})

})


// ballotReport.htm 開票more展開
$(function(){
	
	//展開表格結構
	var $n = `<tr class="more_list">
		<td data-th="黨別"><img class="party" src="images/p05.png"></td>
		<td data-th="候選人">xxx</td>
		<td data-th="票數">123,456,789</td>
	  </tr>
		<tr class="more_list">
		<td data-th="黨別"><img class="party" src="images/p05.png"></td>
		<td data-th="候選人">xxx</td>
		<td data-th="票數">123,456,789</td>
	  </tr>
	  <tr class="more_list">
		<td data-th="黨別"><img class="party" src="images/p05.png"></td>
		<td data-th="候選人">xxx</td>
		<td data-th="票數">123,456,789</td>
	  </tr>`	
	
	//隱藏按鈕
	var $less = `<a class="btn btn_less" href="javascript:;">隱藏-</a>`
	
	//當展開按鈕被按
	$(".btn_more").click(function(){
		
		//新增展開表格結構
		$(this).siblings('.ballot_table').append($n)
		//隱藏展開按鈕
		$(this).hide();
		
		//新增隱藏按鈕
		$(this).after($less)
		
		//當隱藏按鈕被按
		$(".btn_less").click(function(){
			//移除展開表格結構
			$('.more_list').remove();
			//隱藏隱藏按鈕
			$(".btn_less").hide();
			//露出展開按鈕
			$('.btn_more').show();
		
		})
		
	})						

})
	
	
	



// ballotReport.htm 全台縣市長執政版圖變化 頁籤切換
$(function(){
	$(".part_thumb_3> h4 >.topic").click(function(){
		var n = this.id.substr(1);
		$(".topic").not("#t"+n).css({ border: "2px solid #e3e3e3", color:"#000"})
		$("#t"+n).css({ border: "2px solid #da401b", color:"#da401b"})
		$(".inner").hide();
		$("#content"+n).show();
		
	}) 
})


// alderman.htm 議員開票-各選區當選席次明細 頁籤切換
$(function(){
	
	$(".constituency").click(function(){
		var n = this.id.substr(1);
		$(".constituency").not("#c"+n).css({ border: "2px solid #fff" , color:"#000"})
		$("#c"+n).css({ border: "2px solid #C30" , color:"#C30"})
		//左表格
		$(".list").hide();
		$("#list"+n).show();
		//上方標題選區
		$(".place").hide();
		$("#p"+n).show();
		//piechart原餅圖
		//$(".pie").hide();
		//$("#piechart"+n).show();
		return flase;
	}).eq(0).click();
})





	
