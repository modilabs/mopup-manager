//resize page to fit vertical scroll
$(window).on('resize', function(){
  var h = $(window).height() - 128;
  $('#nmis_list').css({height: h});
});
