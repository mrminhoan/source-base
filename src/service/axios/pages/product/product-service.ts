import { API } from '@constants';
import { ProductModel, ProductSearchModel } from '@models/class';
import { IApiRequestConfig, IPaginationModelResponse } from '@models/interface';
import { BaseService } from '@service/axios';

export const productService = {
  getList(request?: Partial<IApiRequestConfig<ProductSearchModel, ProductModel[]>>) {
    return BaseService.get<IPaginationModelResponse<ProductSearchModel>>({
      ...request,
      url: API.PRODUCTS.LIST,
      toResponse: ProductModel.toResponse,
      keyMap: 'products',
      keyUrl: 'apiUrl_v3',
    });
  },
  getByKey(request?: Partial<IApiRequestConfig<string>>) {
    try {
      return BaseService.getById<ProductModel>({
        ...request,
        url: API.PRODUCTS.PRODUCT_BY_KEY.format(request?.payload || '1'),
        toResponse: ProductModel.toResponse,
        keyUrl: 'apiUrl_v3',
      });
    } catch (error) {
      console.log({ error });
      return Promise.reject(error);
    }
  },
  addProduct(request?: Partial<IApiRequestConfig<ProductModel>>) {
    return BaseService.post({
      url: API.PRODUCTS.ADD,
      payload: request?.payload,
      keyUrl: 'apiUrl_v3',
    });
  },
};
