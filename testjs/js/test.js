var textF = 'Fizz';
var textB = 'Buzz';

for (var i = 0; i <= 100; i++) {

	if (i%15 == 0) {
		document.write(textF + textB + ', ')
	} else {
	if (i%5 == 0) {
		document.write(textB + ', ')
	} else {
	if (i%3 == 0) {
		document.write(textF + ', ')
	}
	else {
	document.write(i + ', ')
}
}
}
};