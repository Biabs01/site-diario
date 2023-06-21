//Crie a variável de data
var date = new Date()
let display_date = "Data: " +date.toLocaleDateString('pt-BR', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'})

//Carregue o DOM HTML
$(document).ready(function(){
    $("#display_date").html(display_date)
})

//Defina a variável para armazenar a emoção prevista
let predicted_emotion;

//HTML-->JavaScript--->Flask
//Flask--->JavaScript--->HTML
$(function() {
    $("#predict_button").click(function() {
        let input_data = {
            "text": $("#text").val()
        }
        console.log(input_data)

        $.ajax({
            type: 'POST',
            url: "/predict-emotion",
            data: JSON.stringify(input_data),
            dataType: "json",
            contentType: "application/json",
            success: function(result) {
                //fazer a função do resultado
            }
        })
    })
})

