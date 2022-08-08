"use strict";
class MyDate {
    constructor(dia, mes, anio) {
        this.dia = dia,
            this.mes = mes,
            this.anio = anio;
    }
    printFormat() {
        return `${this.dia}/${this.mes}/${this.anio}`;
    }
}
const newDate = new MyDate(12, 2, 2021);
console.log(newDate.printFormat());
