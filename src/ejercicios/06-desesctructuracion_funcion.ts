
/*
    ===== Código de TypeScript =====
*/

export interface producto{

    desc:string;
    precio:number;
}

const telefono :producto={

    desc:"Nokia 3100",
    precio:100
}

const telefono2 :producto={

    desc:"Samsung s10",
    precio:500
}

export function calculaIVA(productos:producto[]):[number,number]{
    let total=0;
    

    // productos.forEach((productoIVA:producto)=>{

    //     total=total+productoIVA.precio;


    // })

    // La forma anterior seria sin desestructuracion, para ahorrar lineas y tiempo la forma 
    // abreviada seria:

    productos.forEach(({precio})=> {

        total=total+precio;

    })

  

    return [total, total*0.21];


}

const articulos =[telefono, telefono2];

// Ahora aplicamos desestructuracion de argumentos

const [total, impuesto]=calculaIVA(articulos);
console.log("Total :" , total);

console.log("Impuesto sobre Ventas:  ",  impuesto);

