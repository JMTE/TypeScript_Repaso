
/*
    ===== Código de TypeScript =====
*/

interface Pasajero{
    nombre:string;
    hijos?:string[];
}

const pasajero1:Pasajero={

    nombre:"Fernando"
}
 
const pasajero2 : Pasajero={
    nombre:"Natalia",
    hijos:["Manuel","Jose"]
}

function imprimeHijos(pasajero:Pasajero):void{

    const cuantosHijos=pasajero.hijos?.length || 0; 
    //Comparador ternario con el ?, si existen los hijos examina el length, si no existen nos da un cero


    console.log(cuantosHijos);


}



imprimeHijos(pasajero2);
