var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки

$(function() {

  $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('footer button').fadeIn();
      else $('footer button').fadeOut();
    });

    $('footer button').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
	
	// меняем картинку в зависимости от выбранно категории мебели
	var categoryArr = $('.category li');

    	$.each(categoryArr, function() {
    		$(this).on('click', function() {
    		$(this).attr('class', 'active');
    		$('.category li').not(this).removeAttr('class', 'active');
    	});
   });

// показываем кнопку при вводе номера телефона 

$('.input_container input').on('keyup', function showButton() {

    if ($('.input_container input').val() != '')
        $('.input_container button').show('slow');
    else
        $('.input_container button').hide('slow');
});

// анимация панели с фото

      var timerId = setInterval(function() {

  var collageArr = $('.feedback li'); //коллеция из всех элементов коллажа

  var rand = Math.floor(Math.random()*collageArr.length); //выбираем рандомный индекс элемента из коллекции
  console.log(rand);

  $(".feedback li:eq(" + rand + ")").addClass('active_li'); //текущему элементу добавляем класс active_li

  $('.feedback li').not(collageArr[rand]).removeClass('active_li'); // у всех кроме текущего убираем класс active_li

}, 7000);

// инициализируем карусель 

$('.autoplay').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

// показываем меню на мобильных экранах при нажатии на значок

$('.fa-bars').on('click', function(){
  $('.menu').css('display', 'block');
  $('header').css('background-color', 'rgba(0, 0, 0, 0.6)');
}) 

// скрываем меню на мобильных экранах при нажатии на значок

$('.fa-times').on('click', function() {
  $('.menu').fadeOut('slow');
})
     
})