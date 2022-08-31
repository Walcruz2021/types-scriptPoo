// STATIC?
// La clase estática significa que no se puede instanciar, heredar y también sellar y no se puede modificar.


export class EjemStatic{

    static dni=33543489 
    
    //...numbers lo que hace es convertir los parametros pasados a un ARRAY
    static max(...numbers:number[]){
      return numbers[0]
    } 
}

//NOTAR COMO ES QUE SE PUEDE ACCEDER AL CAMPO DNI SIN NECESIDAD DE INSTANCIAR PRIMERO LA CLASE EJEMSTATIC

console.log("mi deni es "+ EjemStatic.dni) //MI DNI ES 33543489.

//EN ESTE CASO EL METODO AL SER ESTATICO IMPLICA QUE NO SE TENGA LA NECESIDAD DE INSTANCIAR A LA CLASE PARA LLAMAR AL MISMO
console.log(EjemStatic.max(1,5,9)) // 1

