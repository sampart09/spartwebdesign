$(document).ready(function(){
  $("nav a").click(function(e){
    e.preventDefault();
    var sectionId = $(this).attr("href");
    $("nav a").removeClass("active");
    $(this).addClass("active");
    $("section").not(sectionId).fadeOut();
    $(sectionId).fadeToggle();
  });
});

