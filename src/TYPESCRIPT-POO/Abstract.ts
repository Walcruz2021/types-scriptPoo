// ABASTRACT
// Es una forma de restringir la creacion deobjetos de las clase bases o clases padres

export abstract class Animal{
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

//EN ESTE CASO ANIMAL AL SER UNA CLASE ABSTRACTA NO SE PUEDE INSTANCIAR,LO QUE ME OBLIGA INSTANCIA A LA CLASE HIJA 
//const animal=new Animal("oso")  //error
//esto implicaria que cree una clase nueva llamada OSO que extienda de Animal, y posteriormente ahi si podre instanciar OSO

const dog=new Dog("fatiga","doberman")
console.log(dog.morning) //HOLA FATIGA


//EN ESTE CASO YO PUEDO ACCEDER AL NAME Y MODIFICARLOS DIRECTAMENTE LO CUAL ESTARIA MAL
dog.name="rambo"
console.log(dog.name)

//para solucionar esto deberia poner a NAME como PRIVATE, pero al hacer esto DOG no podria heredar ese atributo

//!!!!!!!!!!!!!ESTO SE SOLUCIONA CON LA PROPIEDAD PROTECTED!!!!!