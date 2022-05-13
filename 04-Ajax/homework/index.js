var URL = 'http://localhost:5000/amigos'

let showFriends = function(){
    $('#lista').empty();
    $.get(`${URL}`,function(friends){
        console.log(friends)
        friends.forEach(element => {
            $('#lista').append(`<li id="${element.id}">${element.name} X</li>`)
            
        });
    })
};

$('#boton').click(showFriends);

$('#search').click(function(){
    
    let id= $('#input').val();
    if(id){
        $.get(`${URL}/${id}`,function(friend){
            console.log(friend);
            
            $('#amigo').text(`El nombre sugerido es: ${friend.name}`);
            $('#input').val("");
        })
    } else{
        $('#amigo').text('Tenes que ingresar un ID');
    }
});

let deleteFriend = function(){
    let id= $('#inputDelete').val();
    let friend;
    if(id){
        $.get(`${URL}/${id}`,function(f){
            friend = f;
        })
        //url, type, access
        $.ajax({
            url: `${URL}/${id}`,
            type: "DELETE",
            success: function(){
                $('success').text(`Tu amigo ${friend.name} fue eliminado.`)
                $('#inputDelete').val("");
                showFriends();

            }
        })
    }else{
        $('#success').text('Tenes que ingresar un ID');
    }
};



$('#delete').click(deleteFriend);