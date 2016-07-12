$(function() {
	
	// меняем картинку в зависимости от выбранно категории мебели
	var categoryArr = $('.category li');

    	$.each(categoryArr, function() {
    		$(this).on('click', function() {
    		event.preventDefault();
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
})