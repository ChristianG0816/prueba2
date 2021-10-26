const socket = io()

// DOM Elements --> Es decir elementos del HTML
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function(){
    
    //Aqui envia al servidor
    socket.emit('chat:message',{
        username: username.value,
        message: message.value
    })
});

//AQUI ES DONDE ESTA EL ENVIO
socket.on('chat:message',function(data){
    output.innerHTML +=`<p>
    <strong>${data.username}<strong>: ${data.message}
    </p>`
});