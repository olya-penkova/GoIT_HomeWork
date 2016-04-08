$(function() {

// карусель

    $('.jcarousel').jcarousel();

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

$('.jcarousel-prev').click(function() {
    $('.jcarousel').jcarousel('scroll', '-=1');
});

$('.jcarousel-next').click(function() {
    $('.jcarousel').jcarousel('scroll', '+=1');
});

// чекбоксы

   $('.niceCheck').click(function() {
   	changeCheck($(this));
   });
   $('.niceCheck').each(function() {
   	changeCheckStart($(this));
   });

   function changeCheck(el) {
   	var el = el,
   	input = el.find("input").eq(0);
     if(!input.attr("checked")) {
        el.css("background-position","0 -17px");
        input.attr("checked", true)
}
     else {
        el.css("background-position","0 0");
        input.attr("checked", false)
    };
    if (input.attr("disabled")) {
    	el.css("background-position","0 -17px");
    };
     return true;

   };
   function changeCheckStart(el) {
   	    var el = el,
        input = el.find("input").eq(0);
        if(input.attr("checked")) {
        el.css("background-position","0 -17px");
        };

        if (input.attr("disabled")) {
        	el.css({
        		background:"url(img/customCheckDisabled.png) 0 -17px"
        	});
        };

     return true;

   };

   // меню

$('.dropdown').hover(
function(){
$(this).children('.submenu').slideDown(500,stop()); 
},
function(){
$(this).children('.submenu').slideUp(500,stop()); 
}
);
function stop(){
$('.submenu').stop(true, true);
}

//меняем цвет

$('.submenu').mouseenter(function () {
    $('.submenu').animate({backgroundColor:'#0df284'}, 500 );
});

$('.submenu').mouseleave(function() {
    $('.submenu').animate({backgroundColor:'#088b0a'}, 500 );
});


});

// селект

$(function(e) {
try {
$("body select").msDropDown();
} catch(e) {
alert(e.message);
}
});