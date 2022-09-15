
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Product } from "./product";

export interface productService{
getAll():Product[]|Promise<Product[]>,

updateProduct(id:Product['id'],change:UpdateProductDto):Product[]|Promise<Product[]>
create(dto:CreateProductDto):Product[]|Promise<Product[]>

//puede retornar Product[] por si otra clase utilizar esta interface y no retornar una promesa
//puede retornar Promise[] en el caso de que una clase utilice esta interface y conusma una API
//puede retornar undefined en caso de que no se encuentre el id
findOne(id:Product['id']):Product[]|Promise<Product[]|undefined>
}