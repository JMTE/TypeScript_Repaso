
/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe{
    nombre:string;
    edad:number;
    direccion :Direccion;
    mostrarDireccion():string;

}

interface Direccion{
    calle:string;
    pais:string;
    ciudad:string;

}
const superHeroe:SuperHeroe ={
    nombre:"Spiderman",
    edad:30,
    direccion:{
        calle:"Calle de la Merced",
        pais:"España",
        ciudad:"A Coruña"
    },
    mostrarDireccion(){
        return this.nombre + ", "+ this.direccion.ciudad+ ", "+this.direccion.calle;
    }


}

const direccion=superHeroe.mostrarDireccion();
console.log(direccion);