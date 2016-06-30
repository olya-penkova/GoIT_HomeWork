
//image search

$(function() {
$('form').on('submit', function() {
	var API_KEY = '2668376-7d676b66e49c276d1b3388afb';
    var URL = "http://pixabay.com/api/?key="+API_KEY+"&q="+ encodeURIComponent($('.search').val());
    console.log($('.search').val());
    $.getJSON(URL, function(data){
    	if (parseInt(data.totalHits)>0) {
    		var ul = document.createElement('ul');
            var word = $('.search').val();
    		$.each(data.hits, function(i, hit) {
    			
                var li = document.createElement('li');
                li.classList.add('grid-item');
                /*var div = document.createElement('div');
                
                div.classList.add('img_name');
                div.innerHTML = word;*/
    			li.innerHTML = '<a href="'+hit.pageURL+'"><img src="'+hit.webformatURL+'" alt="" /><p class="word">'+word+'</p></a>';
    			ul.appendChild(li);
    		});
    		$('.grid').html(ul);
    	} else {
    		$('.grid').append('<p>Nothing find, try again!</p>');
    	}
    });
    return false;
});

 $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 300
});

$('.jcarousel').jcarousel({
        // Core configuration goes here
    });


   $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

});
