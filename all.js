// swiper
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 50,
  speed:2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    allowTouchMove: true,
  },
});

jQuery(document).ready(function ($) {
  // 滑動效果
  $('#l1').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 66
    },
      400);
  });

  $('.clickCircle:nth-child(1), #l2').click(function (event) {
    event.preventDefault();
    if(window.screen.width==767){
      $('html, body').animate({
        scrollTop: 577
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }else if(window.screen.width==414){
      $('html, body').animate({
        scrollTop: 601
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }else if(window.screen.width==320){
      $('html, body').animate({
        scrollTop: 542
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }else if(window.screen.width==375){
      $('html, body').animate({
        scrollTop: 578
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }
    else{
      $('html, body').animate({
        scrollTop: 790
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }
    
  });

  $('.clickCircle:nth-child(2),#l3').click(function (event) {
    event.preventDefault();
    if(window.screen.width==767){
      $('html, body').animate({
        scrollTop: 1220
      },
      800);
      $(".clickCircle:nth-child(2)").addClass("active")
    }else if(window.screen.width==414){
      $('html, body').animate({
        scrollTop: 1234
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }else if(window.screen.width==375){
      $('html, body').animate({
        scrollTop: 1200
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }else if(window.screen.width==320){
      $('html, body').animate({
        scrollTop: 1094
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }else{
      $('html, body').animate({
        scrollTop: 1489
      },
      800);
      $(".clickCircle:nth-child(2)").addClass("active")
    }
    
  });
  $('.clickCircle:nth-child(3),#l4').click(function (event) {
    event.preventDefault();
    if(window.screen.width==767){
      $('html, body').animate({
        scrollTop: 1973
      },
      800);
      $(".clickCircle:nth-child(3)").addClass("active")
    }
    else if(window.screen.width==414){
      $('html, body').animate({
        scrollTop: 2037
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }else if(window.screen.width==375){
      $('html, body').animate({
        scrollTop: 1976
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }else if(window.screen.width==320){
      $('html, body').animate({
        scrollTop: 1896
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }
    else{
      $('html, body').animate({
        scrollTop: 2296
      },
      800);
      $(".clickCircle:nth-child(3)").addClass("active")
    }
    
  });

  $('.clickCircle:nth-child(4),#l5').click(function (event) {
    event.preventDefault();
    if(window.screen.width==767){
      $('html, body').animate({
        scrollTop: 2344
      },
      800);
      $(".clickCircle:nth-child(4)")  .addClass("active")
    }else if(window.screen.width==375){
      $('html, body').animate({
        scrollTop: 2344
      },
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }else if(window.screen.width==320){
      $('html, body').animate({
        scrollTop: 2363},
      800);
      $(".clickCircle:nth-child(1)").addClass("active")
    }
    else{$('html, body').animate({
      scrollTop: 3053
    },
    800);
    $(".clickCircle:nth-child(4)")  .addClass("active")
  }
  });

  

  // 偵測使用者螢幕高度
  $(function () {
    $(window).scroll(function () {
      var scrollVal = $(this).scrollTop();
      $("span.qScrollTop").text(scrollVal);

      if (scrollVal > 790 && scrollVal < 1489) {
        // console.log('true')
        $(".clickCircle:nth-child(2)").removeClass("active")
        $(".clickCircle:nth-child(3)").removeClass("active")
        $(".clickCircle:nth-child(4)").removeClass("active")
        $(".clickCircle:nth-child(1)").addClass("active")
      } else if (scrollVal >= 1489 && scrollVal < 2296) {
        $(".clickCircle:nth-child(1)").removeClass("active")
        $(".clickCircle:nth-child(3)").removeClass("active")
        $(".clickCircle:nth-child(4)").removeClass("active")
        $(".clickCircle:nth-child(2)").addClass("active")
      } else if (scrollVal >= 2296 && scrollVal < 3053) {
        $(".clickCircle:nth-child(1)").removeClass("active")
        $(".clickCircle:nth-child(2)").removeClass("active")
        $(".clickCircle:nth-child(4)").removeClass("active")
        $(".clickCircle:nth-child(3)").addClass("active")
      } else if (scrollVal >= 3053) {
        $(".clickCircle:nth-child(1)").removeClass("active")
        $(".clickCircle:nth-child(2)").removeClass("active")
        $(".clickCircle:nth-child(3)").removeClass("active")
        $(".clickCircle:nth-child(4)").addClass("active")
      } else {
        $(".clickCircle:nth-child(1)").removeClass("active")
      }
    });
  });

});

//toTop顯示
if(window.screen.width<=767){
window.onscroll= function() {scrollfunc()};
function scrollfunc() {
  
}
document.addEventListener('scroll', function(e) {
  if(window.scrollY>=509){
    let toTop= document.querySelector('.back-to-top');
    toTop.style.opacity="1";
    toTop.style.zIndex="9999";
    toTop.style.visibility="visible";
    window.setTimeout((function(){
      toTop.style.opacity="0";
       toTop.style.visibility="hidden";
    }),2000);
  }
})
}
//nav hide
;(function(){
let nav=document.querySelector('.nv');
let navA=document.querySelectorAll('.clickCirclez');
let ck=document.querySelector('#menu_control');
for(let i=0;i<navA.length;i++){
  navA[i].addEventListener('click',function (e){
    // nav.style.left="-100%";
    nav.style.left="-100%";
    
  })
}
//menu_btn

  let mb=document.querySelector('.menu_btn');
  mb.addEventListener('click',function (e){
    if(nav.style.left=="-100%"){
      nav.style.left="0";
    }else{
      nav.style.left="-100%";
    }
  
    
  })
})()
