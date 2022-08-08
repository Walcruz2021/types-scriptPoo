class MyDate{
    dia:number;
    mes:number;
    anio:number;


    constructor(dia:number,mes:number,anio:number){
        this.dia=dia,
        this.mes=mes,
        this.anio=anio
    }

    printFormat():string{
       return `${this.dia}/${this.mes}/${this.anio}`
    }
}

const newDate=new MyDate(12,2,2021)

console.log(newDate.printFormat())

