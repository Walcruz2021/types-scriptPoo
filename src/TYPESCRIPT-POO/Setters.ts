// ##############################################################
// SETTERS
// ##############################################################

// Es parecido a un get, solo que este no retorna nada, es un método void, pero no hace falta colocarle lo que retorna, ya que va a dar error.

// A set lo podemos usar para tener reglas de modificación para nuestros parámetros.

export class myDate {
  constructor(public year: number = 2000, public month: number = 12) {}

  set ChangeMonth(month: number) {
    if (month >= 1 && month <= 12) {
      this.month = month;
    }else {
        throw new Error("mounth out of range")
    }
  }
}

const date = new myDate(2000, 12);
date.ChangeMonth=8
console.log(date.month,"este es el mes")
