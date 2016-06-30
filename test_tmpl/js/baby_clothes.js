$(function() {
//меняем страницы раздела baby clothes в по кнопкам

$('#button_page2').on('click', function() {
     $('.page1').css('display', 'none');
     $('.page2').css('display', 'block');
     console.log('.baby_clothes .page2');
});

$('#button_page1').on('click', function() {
     $('.page2').css('display', 'none');
     $('.page1').css('display', 'block');
});

})