
import { CreateProductDto, UpdateProductDto } from "../dto/product.dto";
import { Product } from "./product";

export interface productService{
getAll():Product[]|Promise<Product[]>,

updateProduct(id:Product['id'],change:UpdateProductDto):Product[]|Promise<Product[]>
create(dto:CreateProductDto):Product[]|Promise<Product[]>
findOne(id:Product['id']):Product[]|Promise<Product[]|undefined>
}