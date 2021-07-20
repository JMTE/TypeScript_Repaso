
/*
    ===== Código de TypeScript =====
*/

import { calculaIVA, producto } from "./06-desesctructuracion_funcion";


const carritoCompras: producto[]=[


{
    desc:"Telefono 1",
    precio:400
},

{
    desc:"Telefono 2",
    precio:800



}

];

const[total2, impuestoSobreVentas2]=calculaIVA(carritoCompras);

console.log("Total ", total2);
console.log("Impuesto sobre Ventas " ,  impuestoSobreVentas2);



