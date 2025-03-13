// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosec=[];

function agregarAmigo() {
    let inputamigo=document.getElementById("amigo");
    let nombreingresado=inputamigo.value;
    
    if (nombreingresado==false){
        alert("Nombre no puede estar vacio ..... Debes Ingresar un Nombre");
        return;
    }
    amigosec.push(nombreingresado);
    inputamigo.value="";
    inputamigo.focus();
    valida_amigos();
}

function valida_amigos() {
    let listadeAmigos=document.getElementById("listaAmigos");
    listadeAmigos.innerHTML="";
    let i=0;
    while ( i<amigosec.length) {
        let item=document.createElement("li");
        item.textContent=amigosec[i];
        listadeAmigos.appendChild(item);
        i++;
        
    }
}

function sortearAmigo() {
    if (amigosec.length===0) {
        alert("No amigos para sortear",);
        return;
    }
let amigoelegido=amigosec[Math.floor(Math.random()*amigosec.length)];
let resultado=document.getElementById("resultado");
resultado.innerHTML=`El amigo sorteado es: ${amigoelegido}`;
let limpiarlista=document.getElementById("listaAmigos");
limpiarlista.innerHTML="";
}    