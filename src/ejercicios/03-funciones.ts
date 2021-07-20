
/*
    ===== Código de TypeScript =====
*/


function sumar(a:number,b:number):number{
    return (a+b);

}

const sumarFlecha=(a:number,b:number):number =>{

    return a+b;
}

function multiplicar(numero:number,base:number, otronumero?:number):number{

    return numero*base;
}


interface PersonajeLOR{

    nombre:string;
    puntosdevida:number;
    mostrarHP();
}

function curar(personaje:PersonajeLOR, curarX:number):void{

personaje.puntosdevida+=curarX;
console.log(personaje);


}

const nuevoPersonaje:PersonajeLOR={
    nombre: "Jose",
    puntosdevida: 50,
    mostrarHP(){
        console.log("Puntos de vida", this.puntosdevida)
    }
}

curar(nuevoPersonaje, 40);

nuevoPersonaje.mostrarHP();



