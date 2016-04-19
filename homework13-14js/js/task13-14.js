'use strict';

//объявляем массив объектов с вопросами и ответами
var testData = [
{
    question: 'Вопрос №1',
    answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    check: ['true', 'false', 'false'],
    name: 'first'
},
{
    question: 'Вопрос №2',
    answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    check: ['false', 'true', 'false'],
    name: 'second'
},
{
    question: 'Вопрос №3',
    answer: ['Ответ №1', 'Ответ №2', 'Ответ №3'],
    check: ['false', 'false', 'true'],
    name: 'third'
}
];

//записываем массив объектов с вопросами и ответами в localStorage
localStorage.setItem('questionAnswer', JSON.stringify(testData));

$(function() {

var test = $('#test').html();

var content = localStorage.getItem('questionAnswer');
content = JSON.parse(content);

var page = tmpl(test, { //формируем тест с помощью шаблонизатора
	data: content
});

$('.show_test').click(function() { // выводим тест на экран по клику на кнопку
	$('.show_test').hide();
	$('.check').css("display", "block");
    $('body').append(page);
});

$('.check').on('click', function() { //проверяем результаты по клику на кнопку
    var result;
        $('.checkbox').each(function() {
    	if ($('.checkbox').prop('checked')) {
    		if ($('.checkbox').attr('value') == 'true') {
    			result = true
    		}
    	}
    	else {
    	     result = false;
    	}
    	return result;
    });
    console.log(result);
 
});

})