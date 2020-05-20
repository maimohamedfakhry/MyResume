$(".nav-link").click(function () {
  var sectionID = $(this).attr("href");
  var sectionPlace = $(sectionID).offset().top;
  $("html,body").animate({ scrollTop: sectionPlace }, 1500);
});
