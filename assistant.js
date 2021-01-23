const btn = window.document.getElementById("btn");
const result = window.document.getElementById("result");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){

    console.log('You can speak now!')
}

recognition.onresult = function(event){

    var text = event.results[0][0].transcript;
    document.getElementById('result').innerHTML = `Você perguntou: ${text}?`;
    read(text);
}

function read(text){

    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    if(text.includes('horas'))
        speech.text = 'São'+ new Date().getHours()+' ' + new Date().getMinutes()+ "agora";
    else if(text.includes('seu')&&(text.includes('nome')))
        speech.text = 'Eu sou Zaia, uma assistente em desenvolvimento criada por Patrick Rodrigues.';
    else if(text.includes('aconteceu')&&(text.includes('2020')))
        speech.text = 'Muita merda, resumindo, principalmente com a nossa saúde, um ano tenso!'
    else if(text.includes('quem')&&(text.includes('Patrick Rodrigues')))
        speech.text = 'Meu programador, na verdade, estamos ainda em fase de desenvolvimento e criação.';
    else if(text.includes('tem')&&(text.includes('sonho')))
        speech.text = 'Bom, eu quero proteger a casa das pessoas, suas vidas, estou sendo programada para atender isso no futuro.';
    window.speechSynthesis.speak(speech);
    

        



    

}
