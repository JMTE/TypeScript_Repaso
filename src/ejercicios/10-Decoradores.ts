
/*
    ===== Código de TypeScript =====
*/

function classDecorator <T extends {new (...args: any[]):{}}>(
    constructor: T

) {
    return class extends constructor{
        newProperty="new Property";
        hello="override";

    };
}


@classDecorator
class miSuperClase{
    public miPropiedad:string="ABC124";


    imprimir(){
        console.log("Hola Mundo");
        
    }
}


console.log(miSuperClase);

const miClase= new miSuperClase();

console.log(miClase.miPropiedad);

