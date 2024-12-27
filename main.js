$(document).ready(function() {
    $('header button').click(function(){
    $('form').slideDown();
    })

    $('#delete').click(function(){
    $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const addTarefa = $('#addInput').val();
        const novoItem = $('<li></li>');
        
        $(`<li>${addTarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#addInput').val('');

        $(novoItem).on('click', function(){
            $(this).toggleClass('riscado')
        })
        $('#delete-tarefa').click(function(){
            $(novoItem).empty();
        })
    })
})