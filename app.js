let numeroSecreto = 0, intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10, maximoReinicios = 5;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (listaNumeroSorteado.length == maximoReinicios) {
        asignarTextoElemento('p', `Usaste el máximo de intentos (${maximoReinicios})`);
        limpiarCaja();
        document.getElementById('reiniciar').setAttribute('disabled', true);
    } else {
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el número ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            //El usuario no acerto
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El numero de secreto es menor');
            } else {
                asignarTextoElemento('p', 'El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
        }
    }
    /*console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);*/
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);
    //Si ya sorteamos todos los numeros
    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números sorteados');
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(), intentos = 1;
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números generar el número aleatorio inicializar el númerode juego
    condicionesIniciales();
    //Desabilitar el botón de nuevo juego 
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
