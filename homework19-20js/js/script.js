$(function () {
   
   //slider

    $('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
  });
  
   //accordion

   function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp().removeClass('open');
    };
 
    $('.accordion-section-tittle').click(function(e) {
        var currentAttrValue = $(this).attr('href');
        close_accordion_section();
       
            $(this).addClass('active');
            $('.accordion-section-tittle').not($(this)).removeClass('active');
            $('.accordion ' + currentAttrValue).slideToggle().addClass('open'); 
       e.preventDefault();
       });
 
        
 

})