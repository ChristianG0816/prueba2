

let reconocimiento;

if(!("webkitSpeechRecognition" in window)){
    alert("No puedes usar la API");
} else{

    //Aqui si reconoce la API
    reconocimiento = new webkitSpeechRecognition();
    reconocimiento.lang = "es-AR"; //Cambio de idioma
    reconocimiento.continuous = true;
    reconocimiento.interim = true;
    reconocimiento.addEventListener("result", iniciar);
}

//funcion

function iniciar(event){
    for(i= event.resultIndex; i < event.results.length; i++){
        document.getElementById('texto').innerHTML = event.results[i][0].transcript;
    }
}

reconocimiento.start();