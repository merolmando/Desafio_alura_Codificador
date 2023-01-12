var entrada = document.getElementById("entrada")
var encriptar = document.getElementById("encriptar")
var desencriptar = document.getElementById("desencriptar")

var actualizar = ()=> {
    entrada = document.getElementById("entrada").value
    console.log(entrada, "valor")
}

encriptar.addEventListener("click",eventoEncriptar)
desencriptar.addEventListener("click",eventoDesencriptar)

function eventoEncriptar (){
    entrada = document.getElementById("entrada")
    funEncriptar(entrada.value)

}
function eventoDesencriptar (){
    entrada = document.getElementById("entrada")
    funDesencriptar(entrada.value)

}

var funEncriptar = (texto) => {
    let newText = ""
    for(let i = 0;i <= texto.length-1;i++){
        console.log(texto[i])
        switch (texto[i]) {
            case "a":
                newText = newText + "ai"
                console.log("echo")
                break;
            case "e":
                newText = newText + "enter"
                console.log("echo")
                break;
            case "i":
                newText = newText + "imes"
                console.log("echo")
                break;
            case "o":
                newText = newText + "ober"
                console.log("echo")
                break;
            case "u":
                newText = newText + "ufat"
                console.log("echo")
                break;
            default:
                newText = newText + texto[i]
                break;
        }
    }
    escribirMensaje(newText)
}
var funDesencriptar = (texto) => {
    let newText = ""
    for (let i = 0; i < texto.length; i++) {
    texto = texto.replace("ai","a")
    texto = texto.replace("enter","e")
    texto = texto.replace("imes","i")
    texto = texto.replace("ober","o")
    texto = texto.replace("ufat","u")
        
    }
    escribirMensaje(texto)
}

function escribirMensaje(mensaje) {
    let texto = document.getElementById("contenedor")
    texto.innerHTML = "<p class = 'resultado'>"+mensaje+"</p>"
}
