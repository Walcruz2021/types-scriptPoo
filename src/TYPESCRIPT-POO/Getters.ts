
// ##############################################################
// GETTERS
// ##############################################################

// Con get podemos acceder a una propiedad con un alcance privado, podemos obtener los datos de esa propiedad pero no modificarlos o mutarlos.

// Lo podemos acceder como si fuese una propiedad más de la instancia.

// Por definición, todos los getters tienen que retornar algo.

export class myDate{
constructor(
    public year:number=2000,
    public month:number=12
){}



//CALCULA SI EL AÑO ES BISIESTO O NO

get Bisiesto():boolean{
    if(this.year % 400===0)return true
    if(this.year % 100===0)return false
    return this.year % 4===0
}

}

const date=new myDate(2000,12)
console.log(date.Bisiesto) //TRUE


const date2=new myDate(2001,12)
console.log(date2.Bisiesto) //FALSE