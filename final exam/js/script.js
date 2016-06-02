
//image search

$(function() {
$('form').on('submit', function() {
	var API_KEY = '2668376-7d676b66e49c276d1b3388afb';
    var URL = "http://pixabay.com/api/?key="+API_KEY+"&q="+ encodeURIComponent($('.search').val());
    $.getJSON(URL, function(data){
    	if (parseInt(data.totalHits)>0) {
    		var ul = $('.menu');
            var test = $('#test').html();
            var page = tmpl(test, { data: data });
    		$.each(data.hits, function(i, hit) {
    			var ul = $('.menu');
                var li = $('.grid-item');
    			li.innerHTML = '<a href="'+hit.pageURL+'"><img src="'+hit.webformatURL+'" alt="" /></a>';
    			ul.append(li);
    		});
    		$('#test').html(ul);
    	} else {
    		$('#test').append('<p>Nothing find, try again!</p>');
    	}
    });
    return false;
})

 $('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 300
})

});
