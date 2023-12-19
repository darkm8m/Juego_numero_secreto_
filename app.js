let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    /*let ciudad = prompt("Dime el nombre de una ciudad");
    alert(`La ciudad que escogiste es ${ciudad} :D`);
    let numero1 = parseInt(prompt("Dime un numero a sumar"));
    let numero2 = parseInt(prompt("Dime el segundo numero a sumar"));
    let resultado = numero1 + numero2;
    alert(`La suma de los dos numeros es: ${resultado} `);*/

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1)? 'intento' : 'intentos'}`);
        //habilita el boton de nuevo juego por su id que es reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor')
        }else{
            asignarTextoElemento('p','El numero es mayor')
        }
        limpiarCaja();
    }
    intentos ++;
    /*
    console.log('El boton fue clickeado');
    console.log(typeof(numeroDeUsuario));
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    */
    return;
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =   Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya se sorteo todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sorteo todos los numeros posibles')
    }else {
        //si el numero generado esta incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
    }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del nuemro secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al  ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log("numero secreto: " + numeroSecreto);
    intentos = 1;
}

function reiniciarJuego(){
    //limpiamos la caja
    limpiarCaja();

    /*indicar las condiciones iniciales que son..
    indicar mensaje de intervalo de numeros
    generar numero aleatoreo
    inicializar intentos */
    condicionesIniciales();


    //desabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


condicionesIniciales();
reiniciarJuego();

let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('Java','Ruby','GoLang');

function mostrarLenguajesDeProgramacion (){
    for(let i=0; i < lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }
}
function mostrarAlrevesLenguajesDeProgramacion(){
    for(let i=lenguajesDeProgramacion.length-1; i >= 0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}
function calcularPromedioLista(lista){
    let suma = 0;
    for(i = 0; i < lista.length; i++){
        suma = suma + lista[i];
    }
    return suma/lista.length;
}
function mayorLista(lista){
    let mayor = lista[0];
    let menor = lista[0];

    for(let i = 0; i< lista.length; i++){
        if(lista[i] > mayor){
            mayor = lista[i];
        }if (lista[i] < menor){
            menor =lista[i];
        }
    }
    console.log(`Mayor ${mayor}`);
    console.log(`Menor ${menor}`);
}

function calcularSumaLista(lista){
    let suma = 0;
    for(let i = 0; i <lista.length; i++){
        suma = suma + lista[i];
    }
    return suma;
}
function encontrarIndiceElemento(lista,elemento){
    for(let i = 0; i < lista.length; i++){
        if(lista[i]=== elemento){
            return i;
        }
    }
    return -1;
}
function sumaListaNumerosIguales(lista){
    let suma = 0;
    for(let i = 0; i < lista.length; i++){
        if(lista[i] == lista[i]){
            suma = suma + lista[i];
            lista.push(suma);
            
            
        }
    }
}

mostrarLenguajesDeProgramacion();
mostrarAlrevesLenguajesDeProgramacion();
let numerosLista = [15,20,58,30,5];
let media = calcularPromedioLista(numerosLista);
console.log(`Media de la lista ${media}`);
mayorLista(numerosLista);
sumalista = calcularSumaLista(numerosLista);
console.log(`Suma de la lista: ${sumalista}`);
console.log(`indice ${encontrarIndiceElemento(numerosLista,5)}`)
let numeroListaIguales = [2,2];
let sumaIguales = sumaListaNumerosIguales(numeroListaIguales);
console.log('iguales: '+sumaIguales);

/*
//funciones de practicas
function holaMundo(nombre) {
    console.log("Hola Mundo");
    console.log(`Hola ${nombre}`);
    return;
}

function numeroDoble(numero) {
    let doble = numero + numero;
    alert(doble);
    return;
}
function tresNumeros(numero1, numero2, numero3){
    let promedio = (numero1+numero2+numero3)/3;
    alert(`Este es el promedio ${promedio}`);
    return;
}

function numeroMayor(numerom1,numerom2){
    return numerom1 > numerom2 ? numerom1 : numerom2;
}
function numeroAlCuadrado(nuemro){
    return nuemro * nuemro;

}
*/




/*

holaMundo("Diego");
numeroDoble(2);
tresNumeros(3,7,5);
let numeroM = numeroMayor(15,20);
console.log(`Estes es el numero mayor ${numeroM}`);
let alCuadrado = numeroAlCuadrado(10);
console.log(`Numero al cuadrado ${alCuadrado}`);

*/


/*
function calcularIMC(peso, altura) {
    let IMC = peso / (altura * altura);
    return IMC;
}
function factorial(numero){
    let fact = 1;
    for(i=1;i<=numero; i++){
        fact = fact * i;
    }
    return fact;
}
function dollarAPesos(dollar){
    let peso = dollar * 20;
    return peso;
}

function areaRectangulo(altura,anchura){
    let perimetro = (altura*2)+(anchura*2);
    let area = altura * anchura;
    console.log(`Estas es el area: ${area} y este es el perimetro ${perimetro}`);
    
}
function areaCirculo(radio){
    let area = (radio * radio) * 3.1416;
    return area;
}

function tablaDeMultiplicar(numero){
    for(i=0;i<=10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

tablaDeMultiplicar(5);

let circuloResultado = areaCirculo(15);
console.log(`Area del circulo ${circuloResultado}`);

areaRectangulo(2,4);

let conversion = dollarAPesos(20);
console.log(`Esta es la conversion: ${conversion}`);


let numero = 10;
let resultadofact = factorial(numero);
console.log(`Este es el numero ${numero} y este su factorial ${resultadofact}`);


let IMCResultado = calcularIMC(10,15);
console.log("imc" + IMCResultado);
*/