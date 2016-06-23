﻿/* Ajax-запрос */

function SendPost() // Наша функция, которая будет осуществлять ajax-отправку
{
       jQuery.ajax({	// Начала конструкции для работы с Ajax через jQuery
                type: "GET", // Метод, которым получаем данные из формы
                url: "/send.php", // Обработчик формы. 
                data: jQuery("#form").serialize(), // Этот метод, берет форму с id=form и достает оттуда данные
                success: function(html) {	// функция выполняемая при успешном отправлении данных
					jQuery("body").empty();	// очищаем тело документа
					jQuery("body").append("<h2><center>Ваше сообщение успешно отправлено.</center></h2>"); // вставляем сообщение об успехе
                }
        });
}