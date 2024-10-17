import { Store } from '@tanstack/store';
import { useStore } from '@tanstack/react-store';
import { produce } from 'immer';

export const productStore = new Store({
  title: 'Product 1',
  price: 123,
  quantity: 100,
});

export const DispatchProductStore = {
  store: productStore,
  updateQuantity(payload) {
    productStore.setState((state) =>
      produce(state, (draft) => {
        draft.quantity = payload;
      }),
    );
  },
  updatePrice(payload) {
    productStore.setState((state) => ({
        ...state,
        price: payload,
    }));
  },
};
