// HERENCIA
// Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.
// A set lo podemos usar para tener reglas de modificación para nuestros parámetros.

export class Animal{
    constructor (public name:string){}

get morning(){
return "hola " + this.name
}

}

export class Dog extends Animal{
constructor(
    name:string, //este es el que heredaria de Animal
    public raza:string
){
super(name)
}

}

const animal=new Animal("oso")
const dog=new Dog("fatiga","doberman")
console.log(dog.morning) //HOLA FATIGA


//EN ESTE CASO YO PUEDO ACCEDER AL NAME Y MODIFICARLOS DIRECTAMENTE LO CUAL ESTARIA MAL
dog.name="rambo"
console.log(dog.name)

//para solucionar esto deberia poner a NAME como PRIVATE, pero al hacer esto DOG no podria heredar ese atributo

//!!!!!!!!!!!!!ESTO SE SOLUCIONA CON LA PROPIEDAD PROTECTED!!!!!