import { proxy, useSnapshot, subscribe, ref } from 'valtio';
import { subscribeKey, watch } from 'valtio/utils';
import { IProductModel } from '../../models/interface/products/i-product-model';
import { devtools } from 'valtio/utils';

interface IProductStore {
  products: IProductModel[];
  quantityAllProducts: number;
  count: number;
  user?: any;
  fetchProduct?: any;
  tempValue?: any;
  uncount?: number;
}
export const store = proxy<IProductStore>({
  products: [
    {
      id: 1,
      title: 'Product 1',
      price: 1000,
      quantity: 100,
    },
    {
      id: 2,
      title: 'Product 2',
      price: 2000,
      quantity: 200,
    },
  ],
  get quantityAllProducts() {
    return this.products.length;
  },
  count: 0,
  uncount: 10,
  user: {
    name: 'User 1',
    age: 10,
    address: {
      office: 'Address Office',
      home: 'Address Home',
    },
  },
  tempValue: ref({ current: 10 }),
});

export const actionsProductStore = {
  addProduct(product: IProductModel) {
    store.products.push(product);
  },
  incrementCount() {
    ++store.count;
    ++store.tempValue.current;
  },
  changeUseAge() {
    store.user.age = ++store.user.age;
  },
};

export const useProductStore = () => {
  const productSnapshot = useSnapshot(store);
  const trackingStateChange = (state, cb?) => {
    subscribe(state, (snapshot) => {
      cb?.();
    });
  };
  const trackingStateChangeByKey = (state, key, cb?) => {
    subscribeKey(state, key, (snapshot) => {
      console.log('key has changed to', snapshot);
      cb?.(snapshot);
    });
  };
  const trackingStateByWatch = (get) => {
    console.log('state has changed to', get(store))
  };
  return {
    productStore: store,
    productSnapshot,
    actionsProductStore,
    trackingStateChange,
    trackingStateChangeByKey,
  };
};

devtools(store, { name: 'Product Store', enabled: true });
