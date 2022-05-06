

const interruptor = document.getElementById('interruptor');
const lamp = document.getElementById('lamp');

function estaQuebrada (){
    // Procura a palavra "quebrada"
    //O index procura uma string dentro do src 
    //Retorna um numero -1 quando não encontra
    // e maior que -1 quando encontra
    return lamp.src.indexOf('quebrada') > -1
}

function lampadaOn () {
    if ( !estaQuebrada() ){

        lamp.src = "img/ligada.jpg" 
    }
    
}

function lampadaOff () {
    
    if ( !estaQuebrada() ){

    lamp.src = "img/desligada.jpg"

    }
}


function lampQuebrada () {
    lamp.src = "img/quebrada.jpg"
}

//Duas funções no mesmo botão e mudando o texto

function lampadaOnOff (){
    if ( interruptor.textContent === 'Ligar' ){

        lampadaOn ();

        interruptor.textContent = 'Desligar';
    } else if (interruptor.textContent = 'Desligar'){
        lampadaOff ()

        interruptor.textContent = 'Ligar';

    }

}


//Ao clicar nos botões
interruptor.addEventListener('click', lampadaOnOff);


//Quando o mouse passa pela imagem
lamp.addEventListener('mouseover', lampadaOn);
//Quando o mouse sai da imagem
lamp.addEventListener('mouseleave', lampadaOff);

//Ao dar dois clicks na lâmpada
lamp.addEventListener('dblclick', lampQuebrada);
