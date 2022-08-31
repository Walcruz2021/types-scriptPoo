import {Product} from './../model/product'
import {Category} from './../model/category'

export interface CreateProductDto extends Omit<Product,'id'|'category'>{
    categoryId:Category['id']
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}



