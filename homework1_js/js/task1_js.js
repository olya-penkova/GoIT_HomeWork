/*var x= prompt ('x = ', '');
var y= prompt ('y = ', '');

if ( isNaN(x) ) {
      alert('введите x - число')
  } else;

if ((x+"").indexOf(".") > 0) {
alert('введите x - целое число');
} else;

if (y < 0) {
    alert('введите y - больше 0');
  } else;

  if ((y+"").indexOf(".") > 0) {
alert('введите y - целое число');
} else;

      if ( isNaN(y) ) {
      alert('введите y - целое число, больше 0');
    } else; {
console.log( pow(x, y) );
}

function pow(x, y) {
	var result = 1;
	for(var i=0;i<y;i++) 
		result*=x;
    return result;
}*/

function get() {
var a = 1;
function summ() {
var b = 2;
b = b + a;
var a = 3;
return b;
}
return summ();
};
console.log(get);

