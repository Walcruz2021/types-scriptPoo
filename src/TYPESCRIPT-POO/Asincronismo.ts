import axios from 'axios'

(async ()=>{

function getProducts(){
    const promise=axios.get('https://api.escuelajs.co/api/v1/products')
    return promise
}


async function getProductsAsync(){
    const rta=await axios.get('https://api.escuelajs.co/api/v1/products')
    return rta.data
}


//1 FORMA DE IMPRIMIR
const products=await getProducts()
//console.log(products)

//2 FORMA DE IMPRIMIR
const products2=await getProductsAsync()
console.log(products2)
})()