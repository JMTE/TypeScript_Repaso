
/*
    ===== Código de TypeScript =====
*/

function queTipoSoy <T> (argumento:T){
    return argumento;
}


let soyString=queTipoSoy("Hola Mundo");
let soyNumero=queTipoSoy(100);
let soyLaVerdad=queTipoSoy(false);
let soyArray=queTipoSoy([1,23,4,3,4,23,5]);
let soyExplicito=queTipoSoy<number>(100);

