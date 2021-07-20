
/*
    ===== Código de TypeScript =====
*/


let habilidades:(boolean|string|number)[]=["Bash", "Counter", "Healing",  100];
habilidades.push(true);


interface Personaje{

    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?: string; 
    //Con la interrogante hacemos esta variable opcional
}

const personaje:Personaje ={

    nombre:'Strider',
    hp:100,
    habilidades:["Bash","Counter","Healting"]

}

personaje.puebloNatal="Pueblo Natal";

console.table(personaje);