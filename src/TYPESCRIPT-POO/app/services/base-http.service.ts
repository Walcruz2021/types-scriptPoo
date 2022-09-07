//EJEMPLO DE COMO CON LA CLASE GENERICA NOS EVITAMOS TENER QUE CONSTRUIR UN productServiceHttp O UN categoryServiceHttp
//NOS SERVIRA SIEMPRE EN CUANDO LOS GET Y POST SEAN MAS O MENOS IGUALES


import axios from 'axios'
import {Product} from '../model/product'
import {Category} from '../model/category'

export class BaseHttpService<T>{
constructor(
    private url:string
){}

async getAll(){
const {data}=await axios.get<T[]>(this.url)
return data 
}
}


(async ()=>{
const url1='https://api.escuelajs.co/api/v1/products'
const productService=new BaseHttpService<Product>(url1)
const rta=await productService.getAll()
console.log(rta.length)

const url2='https://api.escuelajs.co/api/v1/categories'
const categoryService=new BaseHttpService<Category>(url2)
const rta2=await categoryService.getAll()
console.log(rta2.length)
})()

