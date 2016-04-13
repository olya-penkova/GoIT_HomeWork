var ol = document.createElement('ol');
ol.classList.add('menu');
var parentElem = document.body;
parentElem.insertBefore(ol, parentElem.children[0]);

var name = 'Тест по программированию';

var questionOne = 'Вопрос №1';
var questionTwo = 'Вопрос №2';
var questionThree = 'Вопрос №3';

var answerOne = 'Вариант ответа №1';
var answerTwo = 'Вариант ответа №2';
var answerThree = 'Вариант ответа №3';

var buttonText = 'Проверить мои результаты';

var ol = {
	zagolovok : function(name) {
    var testName = document.createElement('h1');
    testName.classList.add('testName');
    testName.innerHTML = name;
    var parentElem = document.body;
    parentElem.insertBefore(testName, parentElem.children[0]);

},   

	firstQuestion : function(questionOne) {
	var li = document.createElement('li');
	li.classList.add('menu-item');
	li.innerHTML = questionOne;
	var liParent = document.querySelector('.menu');
	liParent.appendChild(li)
	ol.answers(answerOne, answerTwo, answerThree);
},

    answers : function(answerOne, answerTwo, answerThree) {

    var label = document.createElement('label');
    label.classList.add('answers');
	var liParent = document.querySelector('.menu');
	liParent.appendChild(label);

	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	label.insertBefore(check, label.children[0]);

	var labelText = document.createElement('labelText');
	labelText.innerHTML = answerOne;
	label.insertBefore(labelText, label.children[1]);

	var br = document.createElement('br');
	label.insertBefore(br, label.children[2]);

	var label = document.createElement('label');
	label.classList.add('answers');
	var liParent = document.querySelector('.menu');
	liParent.appendChild(label);

	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	label.insertBefore(check, label.children[0]);

	var labelText = document.createElement('labelText');
	labelText.innerHTML = answerTwo;
	label.insertBefore(labelText, label.children[1]);

	var br = document.createElement('br');
	label.insertBefore(br, label.children[2]);

	var label = document.createElement('label');
	label.classList.add('answers');
	var liParent = document.querySelector('.menu');
	liParent.appendChild(label);

	var check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	label.insertBefore(check, label.children[0]);

	var labelText = document.createElement('labelText');
	labelText.innerHTML = answerThree;
	label.insertBefore(labelText, label.children[1]);
},
	secondQuestion : function(questionTwo) {
    var li = document.createElement('li');
    li.classList.add('menu-item');
	li.innerHTML = questionTwo;
	var liParent = document.querySelector('.menu');
	liParent.appendChild(li);
	ol.answers(answerOne, answerTwo, answerThree);
},
	thirdQuestion : function(questionThree) {
    var li = document.createElement('li');
    li.classList.add('menu-item');
	li.innerHTML = questionThree;
	var liParent = document.querySelector('.menu');
	liParent.appendChild(li);
	ol.answers(answerOne, answerTwo, answerThree);
},
    testCheck : function(buttonText) {
    var button = document.createElement('button');
    button.classList.add('button');
    button.innerHTML = buttonText;
    var parentElem = document.body;
    parentElem.appendChild(button);
    }
}

ol.zagolovok(name);
ol.firstQuestion(questionOne);
ol.secondQuestion(questionTwo);
ol.thirdQuestion(questionThree);
ol.testCheck(buttonText);

console.log(ol);