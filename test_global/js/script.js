$(document).ready(function() {

// Форма обратной связи................................./

var regVr22 = "<div><span>Сообщение обрабатывается...</span></div><br>";

$('.contacts_item button').click(function(){

        $("#loadBar").html(regVr22).show();
        console.log('button');

        var posName = $("#posName").val();

        var posEmail = $("#posEmail").val();

        var posTel = $("#posTel").val();

        var posText = $("#posText").val();

        $.ajax({

            type: "POST",

            url: "send.php",

            data: {"posName": posName, "posEmail": posEmail, "posTel": posTel, "posText": posText},

            cache: false,

            success: function(response){

        var messageResp = "<p>Спасибо, <strong>";

        var resultStat = "!</strong> Ваше сообщение отправлено!</p>";

        var oll = (messageResp + posName + resultStat);

                if(response == 1){

                $("#loadBar").html(oll).fadeIn(3000);

                $("#posName").val("");

                $("#posEmail").val("");

                $("#posTel").val("");

                $("#posText").val("");
                } else {
        $("#loadBar").html(response).fadeIn(3000); }
          }
        });
        return false;
});
});
