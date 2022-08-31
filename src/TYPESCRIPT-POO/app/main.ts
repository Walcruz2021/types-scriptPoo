import axios from 'axios';
import { Product } from './model/product';



// EN  ESTE EJEMPLO getProducts esta tipado como corresponde, pero rta.data no esta tipado
//es decir se tipo externamente pero internamente NO 
// (async () => {
//   async function getProducts(): Promise<Product[]> {
//     const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
//     return rta.data;
//   }
//   const products=await getProducts()
//   console.log(products)
// })();


//de esta manera se encuentra tipado tanto externamente como internamente

(async () => {
    async function getProducts(){
      const rta = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
      return rta.data;
    }
  
    const products=await getProducts()
    console.log(products)
  })();

