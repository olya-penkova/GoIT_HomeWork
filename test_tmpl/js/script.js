'use strict';

//объявляем массив объектов с фото, названием и ценой товара
var newProducts = [
{
    img: 'img/item1.png',
    name: 'LUVABLE THEMED BURP CLOTHS',
    price: '$45',
    lastPrice: ''
},
{
    img: 'img/item2.png',
    name: 'LUVABLE I LOVE MUMMY AND DADDY COUNT',
    price: '$67',
    lastPrice: ''
},
{
    img: 'img/item3.png',
    name: 'LUVABLE FRIENDS ANIMAL BABY TOWEL',
    price: '$34',
    lastPrice: ''
},
{
    img: 'img/item4.png',
    name: 'LUVABLE FRIENDS ANIMAL CLOSURE BABY BIB',
    price: '$23',
    lastPrice: ''
},
{
	img: 'img/item5.png',
    name: 'LUVABLE RECEIVING BLANKETS, COUNT',
    price: '$50',
    lastPrice: '$52'
},
{
	img: 'img/item6.png',
    name: 'JORDAN BABY CLOTHES',
    price: '$88',
    lastPrice: ''
},
{
	img: 'img/item7.png',
    name: 'THIRSTIES DIAPER COVER WITH HOOK AND LOOP',
    price: '$80',
    lastPrice: '$90'
},
{
	img: 'img/item5.png',
    name: 'LUVABLE RECEIVING BLANKETS, COUNT',
    price: '$50',
    lastPrice: '$52'
},
{
	img: 'img/item1_1.png',
	name: 'HALO SLEEPSAK WEARABLE BLANKET',
	price: '$60',
	lastPrice: '$67'
},
{
	img: 'img/item1_2.png',
	name: 'CITY THREADS GIRLS LEGGINGS',
	price: '$50',
	lastPrice: '$56'
},
{
	img: 'img/item7.png',
	name: 'THIRSTIES DIAPER COVER WITH HOOK AND LOOP',
	price: '$80',
	lastPrice: '$90'
},
{
	img: 'img/item1_3.png',
	name: 'NIKE JORDAN NEWBORN BABY BOOTIES',
	price: '$40',
	lastPrice: '$55'
},
{
	img: 'img/item1_4.png',
	name: 'SPASILK BATHROBE WITH BOOTIES',
	price: '$90',
	lastPrice: '$112'
}
];


$(function () {

localStorage.setItem('productsItems', JSON.stringify(newProducts));

var product = $('#product').html();
var content = localStorage.getItem('productsItems');
content = JSON.parse(content);

var page = tmpl(product, { //формируем карусель с помощью шаблонизатора
	data: content
});

localStorage.setItem('saleItems', JSON.stringify(newProducts));

var items = $('#items').html();

var content = localStorage.getItem('productsItems');
content = JSON.parse(content);

var salePage = tmpl(items, { //формируем карусель с помощью шаблонизатора
	data: content
});

$('#first').append(page); //выводим карусель на страницу
$('#last').append(salePage); //выводим карусель на страницу

	$('.jcarousel').slick({
  dots: false,
  infinite: false,
  speed: 200,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 785,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 495,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  // меняем вид кнопок регулирования карусели

	$('button.slick-prev.slick-arrow').html('<i class="fa fa-long-arrow-left" aria-hidden="true"></i>');
	$('button.slick-next.slick-arrow').html('<i class="fa fa-long-arrow-right" aria-hidden="true"></i>');

// делаем кнопку "ввверх" при прокрутке экрана
  var upElem = document.getElementById('back_top_button');

    var pageYLabel = 0;

    upElem.onclick = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;

      switch (this.className) {
        case 'up':
          pageYLabel = pageY;
          window.scrollTo(0, 0);
          this.className = 'down';
          break;

        case 'down':
          window.scrollTo(0, pageYLabel);
          this.className = 'up';
      }

    };

    window.onscroll = function() {
      var pageY = window.pageYOffset || document.documentElement.scrollTop;
      var innerHeight = document.documentElement.clientHeight;

      var menuElem = document.getElementById('menu');
      var menuSourceBottom = menuElem.getBoundingClientRect().bottom + window.pageYOffset;

      /*if (menuElem.classList.contains('fixed') && window.pageYOffset < menuSourceBottom) {
        menuElem.classList.remove('fixed');
      } else if (window.pageYOffset > menuSourceBottom) {
        menuElem.classList.add('fixed');
      }*/

      switch (upElem.className) {
        case '':
          if (pageY > innerHeight) {
            upElem.className = 'up';
          }
          break;

        case 'up':
          if (pageY < innerHeight) {
            upElem.className = '';
          }
          break;

        case 'down':
          if (pageY > innerHeight) {
            upElem.className = 'up';
          }
          break;

      }
    };
// вешаем ярлык sale если есть старая цена
	/*var sale = $('.salePrice');
	console.log(sale);


	function chekSale() {
	    for (var i = 0; i < sale.length; i++) {

	    	if (sale[i].length > 0) {
	    console.log(sale[i]);
       	$(this).css('display', 'inline-block')
       }
       else {
       	$(this).css('display', 'none')
       }
	    };
       
	};

    chekSale();*/

// показываем iframe account при нажатии на my account

$('.header_item a:nth-child(2)').on('click', function () {
     $('.account').css('display', 'block');
});

})