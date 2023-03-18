$(window).on('resize', function() {
    if ($(window).width() < 768) {
      $('.col-lg-6').removeClass('col-lg-6').addClass('col-12');
    } else {
      $('.col-12').removeClass('col-12').addClass('col-lg-6');
    }
  });
