//ME PERMITE ENVIAR EL TYPADO COMO SI FUESE UN PARAMETRO
// es decir es un tipo de dato genericos que infiere el tipo de acuerdo al dato que le pasemos
//en el momento de invocar a la funcion 
//con esto nos evitamos tener que preguntar si el parametro que llego al invocar a la funcion 
//es un array o string etc etc y de acuerdo a eso utilzar sus funciones correspondientes
//y nos evitamos en el momento de crerar a funcion---> 
//function  getValue(value:string | number | [] etc etc){
// return value
//}

function  getValue<T>(value:T){
    return value
}
getValue<string>("prueba").charAt
getValue<number[]>([3,54,6]).forEach

//ESTE ES N EJMPLO DE GENERICO APLICADO A UN METODO
//PAR AAPLICARLO A UNA CLASE VER EL ARCHIVO base-http.service