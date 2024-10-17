import { API } from '@constants';
import { BaseService } from '@service/axios';
interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
}
export const createProductService = <T = IProduct>() => {
  return {
    getList() {
      return BaseService.get<T[]>(API.PRODUCTS, {});
    },
  };
};
export const ProductService = createProductService<IProduct>();
