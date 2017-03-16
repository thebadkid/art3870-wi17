$(window).scroll(function(){//start of scroll

var fromTop = $(window).scrollTop();
console.log(fromTop);

$("#headline").text("You scrolled " + fromTop +"px");



  if(fromTop > 4000){

    $("#headline").text("You scrolled too far");
    $("#headline").css({
      "transform": "rotate(0 deg)",
      "display":"none"

                       });
  }else {

  $("#headline").css({
  "top" : fromTop * 1.1 +"px",
  "transform": "rotate("+ fromTop+"deg)",
      "display":"block"
    });
  }












 $("#tint").css({"top" : fromTop *1.4 +"px"
   });





  });//end of scroll
