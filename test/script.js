var colorArr = ['#a17573', '#ccffff', '#ffb366', '#b3ff66', '#e6d836', '#ead8fa', '#7fffd4', '#d28c9a', '#ffe0d1', '#4d9c2d', '#c29bff', '#ff6768'];

$(function() {
	$('.content').on('click', function() {
         var rand = Math.floor(Math.random()*colorArr.length);
         var randColor = colorArr[rand];
         $(this).css('background', randColor);
	})
})