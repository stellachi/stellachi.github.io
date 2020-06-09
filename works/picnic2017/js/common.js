
//圖集 gallery_1 首頁輪撥圖  =============
$(function(){
  
  var mySlider_1 = $(".gallery_1 .run .inner").bxSlider({  
    slideWidth:768,
    auto:true,
    pause:3000,
    autoDelay:3000,
    captions:true,
    pager:false,
    mode:"horizontal",
    randomStart:true,  
    onSliderLoad : function(){
      $(".gallery_1").css({height:"auto"});
      $(".gallery_1 .run .inner .piece img").show();
    }
  });
  
});

$(function(){
      $( ".hamburger" ).click(function(){
        $( ".menu" ).slideToggle("fast", function(){
          $( ".hamburger" ).hide();
          $( ".cross" ).show();
        });
      $(".overlay").fadeIn();
      });

      $(".cross").click(function(){
        $( ".menu" ).slideToggle("fast", function(){
          $( ".cross" ).hide();
          $( ".hamburger" ).show();
        });
        $(".overlay").hide();
      });
   });

// gototop ======================================
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
                $goToTop.css({"opacity":"0.6", "bottom":"50px"}); 
              } else {
                $goToTop.css({"opacity":"0", "bottom":"30px"}); 
              }
            }, 200);
  });
  
  // 讓捲軸用動畫的方式移動到到指定id位罝
  $goToTop.on("click", function(){
    var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
    $body.animate({scrollTop: iScrollPointA}, 150);
    return false;
  });
//--- 
});