// PROTECTED
// El modificador Protected permite el acceso al miembro de la clase desde sí mismo y desde cualquier clase que herede (subclase) de él.
// Básicamente, es la forma de heredar propiedades y métodos.
// Es similar a como funciona una propiedad o método privado, pero nos permite realizar herencia.

class Person {
    protected firstName:string;
    protected lastName:string;
   
    constructor(firstName:string, lastName:string) {
      this.firstName=firstName;
      this.lastName=lastName;
    }
   
    getName() : string {
      return this.firstName + " "+ this.lastName
    }
  } 
   
   
  class Employee extends Person {
    designation:string;
   
    constructor(firstName:string, lastName:string, designation:string) {
      super(firstName,lastName)
      this.designation=designation;
    }
   
    //ESTANDO DENTRO DE LA CLASE QUE HEREDA DE "PERSON" PUEDO ACCEDER A LOS ATRIBUTOS PROTECTED Y HASTA MODIFICARLOS
    changeName(firstName:string, lastName:string): void {
      this.firstName=firstName;
      this.lastName=lastName;  
    }
   
  }
   
   
  let p= new Employee("Jon","Snow","Manager")
   
  //NO PUEDO ACCEDER A LOS ATRIBUTOS FEURA DE LA CLASE
  //Compiler Error
  //console.log(p.firstName)   //Property 'firstName' is private and only accessible within class 'Person'.
  //console.log(p.lastName)    //Property 'lastName' is private and only accessible within class 'Person'
   
  //SI PUEDO ACCEDER DE LA CLASE HEREDADA (person) A LA FUNCION 
  console.log(p.getName())   //Jon Snow
   
  //NI SIQUIERA INSTANCIANDO A LA MISMA CLASE PADRE PUEDO ACCEDER A LOS ATRIBUTOS DIRECTAMENTE, ES DECIR SOLO SE PUEDE
  //HACER A TRAVES DE LOS METODOS
  
  let p1= new Person("Jon","Snow")
  //Compiler Error
  // console.log(p.firstName)   //Property 'firstName' is private and only accessible within class 'Person'.
  //console.log(p.lastName)    //Property 'lastName' is private and only accessible within class '


//************************************OTRO EJEMPLO***************************************  
// export class Animal{
//     constructor (protected name:string){}

// protected get morning(){
// return "hola " + this.name
// }
// }

// export class Dog extends Animal{
// constructor(
//     name:string, //este es el que heredaria de Animal
//     public raza:string
// ){
// super(name)
// }

// ladrar(cant:number):void{
//     for(let i=0; i<cant;i++){
//         console.log(this.morning)
//     }
// }


// }

// const animal=new Animal("oso")

// const dog=new Dog("fatiga","doberman")
// dog.ladrar(2) //HOLA FATIGA - HOLA FATIGA




