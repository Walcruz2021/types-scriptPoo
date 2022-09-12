import {productHttpService} from "./services/product-http.service"

(async()=>{

    const productService=new productHttpService()
    const listadoProduct=await productService.getAll()
    //console.log(listadoProduct)

    const productId=listadoProduct[0].id
    
    await productService.updateProduct(productId,{
        price:321656,
        title:"nuevo title",
        description:"new description",
        
    })
    const productSearch=await productService.findOne(productId)
    console.log(productSearch)
})()