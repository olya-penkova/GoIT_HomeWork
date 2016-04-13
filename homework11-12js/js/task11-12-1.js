$(function() {

var task = $('#task').html();
var taskData = {
  foto: 'https://scontent-waw1-1.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/168664_120009411402782_6391842_n.jpg?oh=748f3cc4d100f9f03dc7d691ad215840&oe=577083A2'
};
var content = tmpl(task, taskData);

$('body').append(content);

})

