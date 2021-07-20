
/*
    ===== Código de TypeScript =====
*/

interface Reproductor{

    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
    
    
}
interface Detalles{
    autor:string;
    año:number;

}

const reproductor:Reproductor={

    volumen:90,
    segundo:36,
    cancion:"With you",
    detalles:{
        autor:"U2" ,
        año:1992
    }

} 

const autor ="Fulano";

const{volumen, segundo, cancion, detalles} =reproductor;
const{autor:autorDetalle, año}=detalles;




// console.log("El volumen actual de: ", volumen );
// console.log("El segundo actual de ", segundo);
// console.log("La cancion actual de ", cancion);
// console.log("El autor es: ",  autorDetalle);

// Ahora vamos a hacer el paso contrario al anterior

const dbz:string []=["Goku","Vegeta","Trunks", ];

const [p1,p2,p3]=dbz;

console.log("Personaje 1 :" +p1);
console.log("Personaje 2 :" +p2);
console.log("Personaje 3 :", p3);


