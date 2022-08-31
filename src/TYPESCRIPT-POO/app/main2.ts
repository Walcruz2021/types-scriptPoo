import {ProductMemory} from './services/product-memory.service'

const productService=new ProductMemory()

productService.create({
    title:"productio1",
    price:200,
    description:"sduihafiusa",
    categoryId:2,
    images:[]
})

//console.log(product.getAll())

const products=productService.getAll()
const productId=products[0].id

productService.updateProduct(productId,{
    title:"walter"
})

const rta=productService.findOne(productId)
console.log(rta)