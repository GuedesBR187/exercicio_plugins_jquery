$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(DDD) 90000-0000'
    })

    $('#CEP').mask('00000-000',{
        placeholder: '12345-678'
    })

    $('#CPF').mask('000.000.000-00',{
        placeholder: '123.456.789-10'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            CEP:{
                required: true
            },
            CPF:{
                required: true
            },
            endereco:{
                required: false
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu email',
            telefone: 'Por favor, insira seu telefone',
            CEP: 'Por favor, insira seu CEP',
            CPF: 'Por favor, insira seu CPF',
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})