// INTERFACES en clases
// Las interfaces en clases funcionan como contratos, nos permiten tipar tanto los atributos como los métodos.
// Aquí no podemos utilizar encapsulamiento, por defecto todos los atributos y métodos son públicos.

// IMPLEMENTS
// Tiene la misma sintaxis cuando aplicamos herencias en las clases, pero implements no es una herencia, es un contrato
//que nos dice que nuestra clase tiene que cumplir con un estándar que es la interface.
// Este contrato es tanto como para los parámetros como para los métodos

export interface Driver {
  conexion: string;
  puerto: string;

  connect(): void;
}

class Sql implements Driver {
  constructor(
    public conexion: string,
    public puerto: string,
    private registro: string
  ) {}
  connect(): void {}
}

class Mongo implements Driver {
  constructor(
    public conexion: string,
    public puerto: string,
    private tablas: string
  ) {}
  connect(): void {}
}
