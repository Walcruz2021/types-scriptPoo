// PROTECTED
// Básicamente, es la forma de heredar propiedades y métodos.
// Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia.

export class Animal{
    constructor (protected name:string){}

protected get morning(){
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

ladrar(cant:number):void{
    for(let i=0; i<cant;i++){
        console.log(this.morning)
    }
}
}

const animal=new Animal("oso")
const dog=new Dog("fatiga","doberman")
dog.ladrar(2) //HOLA FATIGA - HOLA FATIGA




