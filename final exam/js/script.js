
//image search

/*function GoogleCallback(func, data){
	window[func](data);
};*/

$(function() {
$('form').on('submit', function(){
	var API_KEY = '2668376-7d676b66e49c276d1b3388afb';
    var URL = "http://pixabay.com/api/?key="+API_KEY+"&q="+ encodeURIComponent($('.search').val());
    $.getJSON(URL, function(data){
    	if (parseInt(data.totalHits)>0) {
    		var ul = document.createElement('ul');
    		$.each(data.hits, function(i, hit) {
    			var li = document.createElement('li');
    			li.innerHTML = '<a href="'+hit.pageURL+'"><img src="'+hit.webformatURL+'" alt="" /></a>';
    			ul.appendChild(li);
    		});
    		$('.grid-item').html(ul);
    	} else {
    		$('.grid-item').append('<p>Nothing find, try again!</p>');
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
