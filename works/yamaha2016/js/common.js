$(function () {


    //主選單///////////////////////////////////////////////////
	var $mainNav = $('.main_nav');
	var top = $mainNav.offset().top;	
	var pos = $mainNav.find('.current').length ? $mainNav.find('.current').offset().left : 0;

	$mainNav.addClass('original').clone().insertAfter($mainNav).addClass('clone').removeClass('original');
	$('.original, .clone').find('.inner').scrollLeft(pos);
	var scrollInterval = setInterval(stick, 10);

	function stick() {
		var orgTop = $mainNav.offset().top; 
		if ($(window).scrollTop() >= (orgTop)){
			$('.clone').show();
			$('.original').css('visibility','hidden');
		}else{
			$('.clone').hide();
			$('.original').css('visibility','visible');
		}
	}


    // nav sub menu
    $('.main_nav.original, .main_nav.clone').find('li').hover(function(){
       if($(this).has('.sub')){
	        var leftvalue = $(this).position().left;
	        $(this).find('.sub').css({'display':'block', left: leftvalue,});
	       }
	    },function(){
	         $(this).find('.sub').css({'display':'none'});
    })


  //video//////////////////////////////////
  var et_iframe_ele = '\
    [src*="youtube.com"],\
    [src*="ettoday.net/tools/player"],\
    [src*="goo.gl"],\
    [src*="facebook.com/plugins/video.php"]\
    ';

  var $iframe = $('iframe');
  var et_iframevideo = $iframe.filter(et_iframe_ele);
 
  if(et_iframevideo.length){
      $(et_iframevideo).wrap('<div class="et_iframevideo" />');
  }

  //google.doc//////////////////////////////////
  $iframe.filter('[src*="docs.google.com"]').wrap('<div class="et_googledoc" />')

});
