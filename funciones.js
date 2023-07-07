
//Ejercicio 1
let arregloNumeros = [3,6,1,8,2,3,6,3,2,5,6], contadorR=0, contadorR2= [0 , 0], numeroRepetido = [];
for(let i=0; i< arregloNumeros.length; i++){
    for(let n=0; n < arregloNumeros.length; n++){
            if(arregloNumeros[i] == arregloNumeros[n]){
                contadorR++;
            }
    }
    contadorR--;
    if(contadorR >= contadorR2[0]){
        if(contadorR == contadorR2[0]){
            numeroRepetido[1] = arregloNumeros[i];
            contadorR2[1] = contadorR;
        }else if(contadorR > contadorR2[0]){
            numeroRepetido[0] = arregloNumeros[i];
            contadorR2[0] = contadorR;
        }
    }
    contadorR = 0;
}

if(contadorR2[0] > contadorR2[1]){
    console.log(`El número mayormente repetido es: ${numeroRepetido[0]} con un total de ${contadorR2[0]} veces`)
}else if(contadorR2[0] == contadorR2[1]){
    console.log(`Existen 2 números mayormente repetidos: ${numeroRepetido[0]} y ${numeroRepetido[1]} con un total de ${contadorR2[1]} veces`)
}

//Ejercicio 2

let arrayLetrasNumeros = [8,"e",7,2,"a","d","f",2,3,1,4,3], arrayLetras = [];
let index= 0;

for(let i=0; i<arrayLetrasNumeros.length; i++){
    if(isNaN(arrayLetrasNumeros[i])){
        arrayLetras[index] = arrayLetrasNumeros[i];
        index++
    }
}

console.log(arrayLetras);

//Ejercicio 3
let arrayNumeros = [1,4,7,2,4,1,9,4,0,2,4,5,12], numeroMayor=0;

for(let i= 0; i<arrayNumeros.length; i++){
    if(arrayNumeros[i]>numeroMayor){
            numeroMayor = arrayNumeros[i];
    }
}

console.log(`El número mayor es: ${numeroMayor}`);

//Ejercicio 4
let descubrirElNumeroMenor =  [1,4,5,-1,-7,2,3,9], numeroMenor= undefined;

for(let i=0; i<descubrirElNumeroMenor.length; i++){
    if(numeroMenor=== undefined){
        numeroMenor= descubrirElNumeroMenor[i];
    }

    if(descubrirElNumeroMenor[i]< numeroMenor){
        numeroMenor= descubrirElNumeroMenor[i];
    }
}

console.log(`El número menor de este array es: ${numeroMenor}`);

//Ejercicio 5
class Contacto{
    constructor(){
        this.Nombre = [];
        this.Apellidos = [];
        this.Telefono = [];
        this.index=0;
    }

    agregarContacto(Nombre, apellido, telefono){
        this.Nombre[index] = Nombre;
        this.Apellidos[index] = apellido;
        this.Telefono[index] = telefono;
        index++;
    }

    buscarUnContactoPorNombre(nombre){
        for(let i=0; i<this.Nombre.length; i++){
            if(this.Nombre[i] === nombre){
                return console.log(`Nombre: ${this.Nombre[i]}\nApellido: ${this.Apellidos[i]}\nTelefono:${this.Telefono[i]}`)
            }
        }

        return console.log("Contacto no existente");
    }
}

const iphone = new Contacto();
iphone.agregarContacto("Gunther", "Nettel Rosario", "9624343243");
iphone.agregarContacto("Rodolfo", "Perez Scre", "962435423243");
iphone.buscarUnContactoPorNombre("Rodolfo");