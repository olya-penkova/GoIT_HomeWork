$(function() {

//dropdown menu

$('nav a').hover(
   function() {
    if ($(this).find('ul').length == 0) {
	 var li = $(this);
	 $.ajax({
	  url: 'index.html', // указываем URL
	  success: function(){
	   li.find('ul').stop(true, true);
	   li.find('ul').slideDown();
	  }
	 });
    } else {
	 $(this).find('ul').stop(true, true); 
	 $(this).find('ul').slideDown(); 
    }
       },
    function() {
    $(this).find('ul').slideUp();
   }
  );	

//fotos change

$('ul.fotos').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.page').find('div.page_foto').removeClass('active').eq($(this).index()).addClass('active');
  });	

//tabs

  $('ul.tabs_caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs_item').removeClass('active').eq($(this).index()).addClass('active');
  });

 // carousel
 
    var leftAr = $('.carousel-arrow-left');
    var rightAr = $('.carousel-arrow-right');
    var elementsList = $('.popular ul');

    var pixelsOffset = 300;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
    var maximumOffset = 0;
 
    leftAr.click(function() {        
        if (currentLeftValue != maximumOffset) {
            currentLeftValue += 300;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }        
    });
 
    rightAr.click(function() {        
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 300;
            elementsList.animate({ left : currentLeftValue + "px"}, 500);
        }     
    }); 

})