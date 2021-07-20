
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    
    constructor(
        public nombre:string,
        public direccion:string
        )
        {
        
    }

    public dameNombre(){
        return this.nombre;
    }
}

class Heroe extends PersonaNormal{

    


//    private alterEgo:string;
//    private  edad:number;
//    private  nombreReal:string;

   constructor(public alterEgo:string, public edad:number, public nombreReal:string){
       super(nombre,direccion);
   }

    imprimirNombre(){

        return this.alterEgo + " es en realidad "+ this.nombreReal;

     }

}
const Peter=new PersonaNormal("Peter","Calle Merced")
const Spiderman=new Heroe("Spiderman", 34, "Parker");

console.log(Spiderman.imprimirNombre());
console.log(Spiderman.dameNombre());

console.log(Peter.dameNombre());
