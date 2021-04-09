// swiper
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 50,
  effect: "fade",
  autoplay: {
    delay: 500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

jQuery(document).ready(function ($) {
  // 滑動效果
  $('#l1').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 70
    },
      400);
  });

  $('.clickCircle:nth-child(1), #l2').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 815
    },
    800);
    $(".clickCircle:nth-child(1)").addClass("active")
  });

  $('.clickCircle:nth-child(2),#l3').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 1560
    },
    800);
    $(".clickCircle:nth-child(2)").addClass("active")
  });
  $('.clickCircle:nth-child(3),#l4').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 2305
    },
    800);
    $(".clickCircle:nth-child(3)").addClass("active")
  });

  $('.clickCircle:nth-child(4),#l5').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 3105
    },
    800);
    $(".clickCircle:nth-child(4)")  .addClass("active")
  });

  // 偵測使用者螢幕高度
  $(function () {
    $(window).scroll(function () {
      var scrollVal = $(this).scrollTop();
      $("span.qScrollTop").text(scrollVal);

      if (scrollVal > 815 && scrollVal < 1560) {
        // console.log('true')
        $(".clickCircle:nth-child(2)").removeClass("active")
        $(".clickCircle:nth-child(3)").removeClass("active")
        $(".clickCircle:nth-child(4)").removeClass("active")
        $(".clickCircle:nth-child(1)").addClass("active")
      } else if (scrollVal >= 1560 && scrollVal < 2302) {
        $(".clickCircle:nth-child(1)").removeClass("active")
        $(".clickCircle:nth-child(3)").removeClass("active")
        $(".clickCircle:nth-child(4)").removeClass("active")
        $(".clickCircle:nth-child(2)").addClass("active")
      } else if (scrollVal >= 2303 && scrollVal < 3103) {
        $(".clickCircle:nth-child(1)").removeClass("active")
        $(".clickCircle:nth-child(2)").removeClass("active")
        $(".clickCircle:nth-child(4)").removeClass("active")
        $(".clickCircle:nth-child(3)").addClass("active")
      } else if (scrollVal >= 3104) {
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
