var n = 5;
var arr = [];

for (var i = 0; i < n; i++) 
{
	arr [i] = prompt('Введите имя', '');
}

var x = prompt('Введите имя пользователя', '');

var isExists = false;
for (var i = 0; i < n; i++) 
{
	if (arr[i] == x) 
	{
		isExists = true;
		break;		
	}
}
if (isExists)
{
	alert( x + ', вы успешно вошли' );
}
else
{
	alert('Error');
}

