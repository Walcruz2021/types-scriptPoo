import axios from 'axios';
import { UpdateProductDto, CreateProductDto } from '../dto/product.dto';
import { Product } from '../model/product';
import { productService } from '../model/product-service.model';

export class productHttpService implements productService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async updateProduct(id: Product['id'], change: UpdateProductDto) {
    const { data } = await axios.put(`${this.url}/${id}`, change);
    return data;
  }

  async create(dto: CreateProductDto) {
    const {data}=await axios.post(this.url,dto)
    return data
  }

  
  async findOne(id: Product['id']) {
   const{data}=await axios.get(`${this.url}/${id}`);
   return data 

  }
}
