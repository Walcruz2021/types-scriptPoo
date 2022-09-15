// Singleton: constructor privado
// Singleton nos previene crear múltiples instancias de una clase.
// Esto es muy usado en Arquitectura de Software, pues nos ayuda a ahorrar uso de memoria.

//EJEMPLO DE USO
// por ejemplo para una Clase maneja la conexión a una base de datos. Imagina que quieres tener solo 100 conexiones disponibles y 
//estas se crean cuando se crean la instancia de la clase la primera vez.
// Podría pasar que si creas una nueva instancia de la clase se crean 100 conexiones mas ( buscar productos 100 + editar producto 100 …) 
//hasta que la base de datos deje de responder.
// Otra cosa interesante es que los objetos ocupan memoria ram y podrías estar creando objetos muy grandes muchas veces innecesariamente 
//y quedarte si memoria ram y que la app muera.


export class PruebaSingleton {
  static instance: PruebaSingleton | null = null;

  private constructor(private name: String) {}

  getName() {
    return this.name;
  }

  static create (name:string){
    if(PruebaSingleton.instance===null){
        console.log("deberia ingresar una vez")
        PruebaSingleton.instance=new PruebaSingleton(name)
    }
    return PruebaSingleton.instance
  }
}

//const prueba = new PruebaSingleton('walter'); al crear la instancia estatica esta manera de instancia ya no nos serviria

const prueba1 = PruebaSingleton.create('walter'); // esta seria la menra correcta

//SI VOLVIESE INSTANCIAR NUEVAMENTE TYPESCRIPT NO LO TOMARIA EN CUENTA AL SEGUNDO
//ES DECIR SOLO SE IMPRIMIRIA prueba1 y no prueba2 
const prueba2 = PruebaSingleton.create('omar') 

console.log(prueba1.getName());
console.log(prueba2.getName());