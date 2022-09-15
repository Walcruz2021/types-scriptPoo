//ESTA CLASE SOLO TRABAJA DE MANERA LOCAL 
//ES DECIR PRODUCT-HTTP.SERVICE ES EL QUE NOS SIRVE DE MEJOR MANERA


import { faker } from '@faker-js/faker';
import { Product } from '../model/product';
import { CreateProductDto, UpdateProductDto } from '../dto/product.dto';
import { productService } from '../model/product-service.model';

export class ProductMemory implements productService{
  private products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),

      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      },
    };
    return this.add(newProduct);
  }

  add(product: Product) {
    this.products.push(product);
    return product;
  }

  updateProduct(id: Product['id'], changes: UpdateProductDto): Product {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes,
    };
    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find((item) => item.id === id);
  }
}
