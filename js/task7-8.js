$(function() {


var $firstPage = $('.first_page_name');
var $first = $('.first');
var $secondPage = $('.second_page_name');
var $second = $('.second');
var $thirdPage = $('.third_page_name');
var $third = $('.third');
console.log($first, $second, $third);

$firstPage.on('click', function() {
    $firstPage.attr('id', 'active');
    $first.attr('id', 'active');
    $secondPage.removeAttr('id', 'active');
    $second.removeAttr('id', 'active');
    $thirdPage.removeAttr('id', 'active');
    $thirdPage.removeAttr('id', 'active');
});

$secondPage.on('click', function() {
	$firstPage.removeAttr('id', 'active');
    $first.removeAttr('id', 'active');
    $secondPage.attr('id', 'active');
    $second.attr('id', 'active');
    $thirdPage.removeAttr('id', 'active');
    $third.removeAttr('id', 'active');
});

$thirdPage.on('click', function() {
	$firstPage.removeAttr('id', 'active');
    $first.removeAttr('id', 'active');
    $secondPage.removeAttr('id', 'active');
    $second.removeAttr('id', 'active');
    $thirdPage.attr('id', 'active');
    $third.attr('id', 'active');
});

var $firstName = $('.first_input');
var $lastName = $('.second_input');
var $adress = $('.third_input');
var $button = $('button');


$firstName.hover(function(){$('.tip--one').show('slow')}, function() {$('.tip--one').hide('slow')});
$lastName.hover(function(){$('.tip--two').show('slow')}, function() {$('.tip--two').hide('slow')});
$adress.hover(function(){$('.tip--three').show('slow')}, function() {$('.tip--three').hide('slow')});

$button.click(function(){
	$('.tip--one').show('slow');
	$('.tip--two').show('slow');
	$('.tip--three').show('slow');
});

});