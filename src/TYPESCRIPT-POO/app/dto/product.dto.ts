import {Product} from './../model/product'
import {Category} from './../model/category'

//en el momento de la creacion omitimo (id y category)
export interface CreateProductDto extends Omit<Product,'id'|'category'>{
    categoryId:Category['id']
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}



