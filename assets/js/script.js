
//counter
var count = $('.counter');
count.counterUp({
  delay: 40,
  time: 3000
});


//window scroll navbar fixed
$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".navbar-scroll").addClass("fixed-top");
    


  } else {
    $(".navbar-scroll").removeClass("fixed-top");
  


  }
});






$(".portfolio-bx .owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  nav: true,
  dots:false,
  navText: ['<i class="fa-solid fa-arrow-left-long bnr-aroow-left"></i>', '<i class="fa-solid fa-arrow-right-long bnr-aroow-right"></i>'],
  // autoplay: true,
  autoplayTimeout: 2000,
 
  responsive: {
    0: {
      items: 1,
      nav: false,
      autoplay: true,
    autoplayTimeout: 2000,


    },
    600: {
      items: 2,
      nav: false,
      autoplay: true,
  autoplayTimeout: 2000,
    },
    1000: {
      items: 3,
      nav: true,
      loop: true,
      // autoplay:true,
      margin: 0,
    }
  }
})






// ================================= 

$(document).ready(function(){
  var heroSlider = $('.hero_carosel');
  heroSlider.on('initialized.owl.carousel changed.owl.carousel', function(e) {
      if (!e.namespace)  {
        return;
      }
    }).owlCarousel({   
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        autoHeight: false,
        mouseDrag: false,
        autoplayHoverPause:true,
        items: 1,
        navText: ['<i class="fa-solid fa-arrow-left-long bnr-aroow-left"></i>', '<i class="fa-solid fa-arrow-right-long bnr-aroow-right"></i>'],

     });

      // $(".owl-item.active .tag").addClass('animated fadeInUp delay-1');
    $(".owl-item.active h1").addClass('animated fadeInUp delay-2');
    $(".owl-item.active .carsl_cnt").addClass('animated fadeInUp delay-3');
    // $(".owl-item.active .carsl_btn").addClass('animated fadeInUp delay-4');


      $(".hero_carosel").on('change.owl.carousel', function(event) {
        
        var item = event.item.index-2;
        
      
        // $('.tag').removeClass('animated fadeInUp delay-1');
        $('h1').removeClass('animated fadeInUp delay-2');
        $('.carsl_cnt').removeClass('animated fadeInUp delay-3');
        // $('.carsl_btn').removeClass('animated fadeInUp delay-4');
        // $('.owl-item').not('.cloned').eq(item).find('.tag').addClass('animated fadeInUp delay-1');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp delay-2');
        $('.owl-item').not('.cloned').eq(item).find('.carsl_cnt').addClass('animated fadeInUp delay-3');
        // $('.owl-item').not('.cloned').eq(item).find('.carsl_btn').addClass('animated fadeInUp delay-4');

     });

    
});






// ===================== 

$(".service-box .owl-carousel").owlCarousel({

  autoplayHoverPause: true,
  loop: true,
  margin: 10,

  nav: false,
  navText: ['<i class="fa-solid fa-arrow-left-long bnr-aroow-left"></i>', '<i class="fa-solid fa-arrow-right-long bnr-aroow-right"></i>'],
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp',
  autoplay: true,
  animateOut: 'fadeOut',
  autoplayTimeout: 3000,
  touchDrag: false,
  mouseDrag: false,


  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,

    },
    600: {
      items: 1
    },
    1000: {
      items: 1,
      nav: false,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp',
      animateOut: 'fadeOut',
      autoplayTimeout: 3000,
      touchDrag: false,
      mouseDrag: false,

    }
  }
})


$(".testimonial-box .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 2000,
  nav: false,
  responsive: {
    0: {
      items: 1,
      nav: false,

    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
      loop: true,
    }
  }
})



$(".blog-detail-bx .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: true,
  navText: ['<i class="fa-solid fa-arrow-left blog-left-arrow"></i>', '<i class="fa-solid fa-arrow-right blog-right-arrow"></i>'],

  responsive: {
    0: {
      items: 1,
      nav: true

    },
    600: {
      items: 1,
      nav: true
    },
    1000: {
      items: 1,
      nav: true,
      loop: true
    }
  }
})


$(".portfolio-category-box .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  
  responsive: {
    0: {
      items: 2,
      nav: true,
      
     

    },
    600: {
      items: 2,
      nav: true,
      
    },
    1000: {
      items: 5,
      nav: false,
      loop: true
    },
    1200:{
      items: 7,
      nav: false,
      loop: true
    }
  }
})


$(".service-page-bx .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  responsive: {
    0: {
      items: 1,
      nav: false

    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: true,
      // autoplay:true,
    }
  }
})



$(".blogopge-carousel-box .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  nav: false,
  autoplay: true,
  smartSpeed:2000,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
      nav: false

    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: true,
      // autoplay:true,
    }
  }
})



//alertbox

$("#contactForm").submit(function (e) {
  e.preventDefault()
  swal(
    'Success ',
    'Thanks for filling out our form!',
    "success"

  )
});





$(document).ready(function () {
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
});



if ($(".img-popup").length) {
  var groups = {};
  $(".img-popup").each(function () {
    var id = parseInt($(this).attr("data-group"), 10);

    if (!groups[id]) {
      groups[id] = [];
    }

    groups[id].push(this);
  });

  $.each(groups, function () {
    $(this).magnificPopup({
      type: "image",
      closeOnContentClick: true,
      closeBtnInside: false,
      gallery: {
        enabled: true
      }
    });
  });
}

// ============= 

// var $box = $(".isotope-box").isotope({
//   itemSelector: ".isotope-item"
// });



// $(".isotope-toolbar").on("click", ".category-btn", function () {
//   var filterValue = $(this).attr("data-type");
//   $(".isotope-toolbar-btn").removeClass("active");
//   $(this).addClass("active");
//   if (filterValue !== "*") {
//     filterValue = '[data-type="' + filterValue + '"]';
//   }
//   console.log(filterValue);
//   $box.isotope({ filter: filterValue });
// });


// multi-select dropdown 

(function ($) {

  "use strict";

  $(document).ready(function () {

    var select = $('select[multiple]');
    var options = select.find('option');

    var div = $('<div />').addClass('selectMultiple');
    var active = $('<div />');
    var list = $('<ul />');
    var placeholder = select.data('placeholder');

    var span = $('<span />').text(placeholder).appendTo(active);

    options.each(function () {
      var text = $(this).text();
      if ($(this).is(':selected')) {
        active.append($('<a />').html('<em>' + text + '</em><i></i>'));
        span.addClass('hide');
      } else {
        list.append($('<li />').html(text));
      }
    });

    active.append($('<div />').addClass('arrow'));
    div.append(active).append(list);

    select.wrap(div);

    $(document).on('click', '.selectMultiple ul li', function (e) {
      var select = $(this).parent().parent();
      var li = $(this);
      if (!select.hasClass('clicked')) {
        select.addClass('clicked');
        li.prev().addClass('beforeRemove');
        li.next().addClass('afterRemove');
        li.addClass('remove');
        var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
        a.slideDown(400, function () {
          setTimeout(function () {
            a.addClass('shown');
            select.children('div').children('span').addClass('hide');
            select.find('option:contains(' + li.text() + ')').prop('selected', true);
          }, 500);
        });
        setTimeout(function () {
          if (li.prev().is(':last-child')) {
            li.prev().removeClass('beforeRemove');
          }
          if (li.next().is(':first-child')) {
            li.next().removeClass('afterRemove');
          }
          setTimeout(function () {
            li.prev().removeClass('beforeRemove');
            li.next().removeClass('afterRemove');
          }, 200);

          li.slideUp(400, function () {
            li.remove();
            select.removeClass('clicked');
          });
        }, 600);
      }
    });

    $(document).on('click', '.selectMultiple > div a', function (e) {
      var select = $(this).parent().parent();
      var self = $(this);
      self.removeClass().addClass('remove');
      select.addClass('open');
      setTimeout(function () {
        self.addClass('disappear');
        setTimeout(function () {
          self.animate({
            width: 0,
            height: 0,
            padding: 0,
            margin: 0
          }, 300, function () {
            var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
            li.slideDown(400, function () {
              li.addClass('show');
              setTimeout(function () {
                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                if (!select.find('option:selected').length) {
                  select.children('div').children('span').removeClass('hide');
                }
                li.removeClass();
              }, 400);
            });
            self.remove();
          })
        }, 300);
      }, 400);
    });

    $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function (e) {
      $(this).parent().parent().toggleClass('open');
    });

  });


})(jQuery);



// radio button click div show 

$(document).ready(function () {
  $(".extra-info").hide()
  $(".radio-btns").change(function () {
    var data_id = $(this).attr('data-id')
    var radiobtn_value = $(this).val();
    if (radiobtn_value == 'yes') {
      $("#" + data_id).show()
    } else {
      $("#" + data_id).hide()
    }

  });
})


// next form show button click 

$(".next").click(function (e) {
  $("#firstForm").css("display", "none")
  $("#secondForm").css("display", "block")
})

$(".previous").click(function (e) {
  $("#secondForm").css("display", "none")
  $("#firstForm").css("display", "block")
})
// === form submit success box 

$(document).ready(function () {
  $("#sucessBox").hide();
});
$("#residentialForm").submit(function (e) {
  e.preventDefault();
  $("#sucessBox").show();
  $("#residentialForm").hide();



});
$("#commercialForm").submit(function (e) {
  e.preventDefault();
  $("#sucessBox").show();
  $("#commercialForm").hide();



});



 // project start
 $(window).on("load", function () {
  var $container = $('.project-content');
  $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });
  $('.project-menu li a').on("click", function () {
      $('.project-menu li a.active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
      return false;
  });

});
//portfolio end





// var activeNavItem = $('.nav-link');

// activeNavItem.click(function () {
//     activeNavItem.removeClass('active');
//     $(this).addClass('active');
// });



// $(".bannerslider .owl-carousel").owlCarousel({
//   loop: true,
//   margin: 10,
//   nav: true,
//   dots: false,
//   responsiveClass: true,
//   navText: ['<i class="fa-solid fa-arrow-left-long bnr-aroow-left"></i>', '<i class="fa-solid fa-arrow-right-long bnr-aroow-right"></i>'],
//   autoplay: true,
//   // animateOut: 'fadeIn',
//   autoplayTimeout: 3000,
//   responsive: {
//     0: {
//       items: 1,
//       nav: true
//     },
//     600: {
//       items: 3,
//       nav: false
//     },
//     1000: {
//       items: 1,
//       nav: true,
//       loop: true,
//       dot: false,
//     }
//   }
// })


// $(window).scroll(function () {

//   if ($(this).scrollTop() > 50) {
//     $(".headermedialinks").removeClass("d-lg-block");

//     $(".headermedialinks").addClass("d-lg-none");

//   } else {

//     $(".headermedialinks").removeClass("d-lg-none");
//     $(".headermedialinks").addClass("d-lg-block");


//   }
// });
