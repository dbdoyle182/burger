$(function(){
    $('.burg-eat').on('click', (event) => {
        
        var id = $(event.currentTarget).attr('data-id');
        console.log('clicking ' + id)
        

        $.ajax('/api/burgers/' + id, {
            type: 'PUT'
        }).then(() => {
            console.log('YUM!');

            location.reload();
        }) 
    })
});