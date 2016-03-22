var ol = document.createElement('ol');
ol.classList.add('menu');
var parentElem = document.body;
parentElem.insertBefore(ol, parentElem.children[0]);

var questionOne = 'Вопрос №1';
var questionTwo = 'Вопрос №2';
var questionThree = 'Вопрос №3';

var answerOne = 'Вариант ответа №1';
var answerTwo = 'Вариант ответа №2';
var answerThree = 'Вариант ответа №3';


var ol = {
	firstQuestion : function(questionOne) {
	var li = document.createElement('li');
	li.innerHTML = questionOne;
	var liParent = document.querySelector('.menu');
	liParent.appendChild(li)
	ol.answers(answerOne, answerTwo, answerThree);
},
    answers : function(answerOne, answerTwo, answerThree) {
	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');

	var liParent = document.querySelector('.menu');
	liParent.appendChild(check);

	var label = document.createElement('label');
	label.innerHTML = answerOne;
	check.appendChild(label);

	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	liParent.appendChild(check);

	var label = document.createElement('label');
	label.innerHTML = answerTwo;
	check.appendChild(label);

	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	liParent.appendChild(check);

	var label = document.createElement('label');
	label.innerHTML = answerThree;
	check.appendChild(label);
},
	secondQuestion : function(questionTwo) {
    var li = document.createElement('li');
	li.innerHTML = questionTwo;
	var liParent = document.querySelector('.menu');
	liParent.appendChild(li);
	ol.answers(answerOne, answerTwo, answerThree);
},
	thirdQuestion : function(questionThree) {
    var li = document.createElement('li');
	li.innerHTML = questionThree;
	var liParent = document.querySelector('.menu');
	liParent.appendChild(li);
	ol.answers(answerOne, answerTwo, answerThree);
	}
}

ol.firstQuestion(questionOne);
ol.secondQuestion(questionTwo);
ol.thirdQuestion(questionThree);

console.log(ol);