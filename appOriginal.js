let amigosArreglo =[];
let nombreSorteado ="";
let vacio = '';


function agregarAmigos() {
    amigosArreglo = document.getElementById('amigo').value.trim();
    if (amigosArreglo == vacio){
        alert('El nombre ingresado no es válido');
    }else{
        amigosArreglo.push(document.querySelector('amigo').value.trim());
    }

    limpiarCampo()
}


function actualizarNombres(amigosArreglo) {
    let lista = document.getElementById('amigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < amigosArreglo.length; i++) {
        lista.innerHTML+= `<li> ${i + 1}.${amigosArreglo[i]}</li>`;
    } 
}
    

function sortearAmigo() {
       
        if (amigosArreglo.length === 0){
            alert('No hay nombre disponible');
            return;
        }
        let alAzar = Math.floor(Math.random ()*amigosArreglo.length);
        nombreSorteado = amigosArreglo[alAzar];
        
       
    console.log(nombreSorteado);
   let reultadoSorteado= document.getElementById('resultado').value;
   reultadoSorteado.innerHTML = nombreSorteado;
    
    }
    
function limpiarCampo(){
    document.querySelector('#amigo').value = '';
}
