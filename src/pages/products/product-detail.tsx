import { useStore } from '@tanstack/react-store';
import { DispatchProductStore } from '../../store';
import Button from 'antd/es/button';
function ProductDetail() {
  const product = useStore(DispatchProductStore.store);
  const { updateQuantity, updatePrice } = DispatchProductStore;
  const updateQuantityProduct = (action: string) => {
    switch (action) {
      case 'increment':
        updateQuantity(product.quantity + 1);
        break;
      case 'decrement':
        updateQuantity(product.quantity - 1);
        break;
    }
  };
  const updateProductPrice = () => {
    updatePrice(product.price + 1);
  };

  return (
    <div className="mt-10">
      <div>Product Detail Page</div>
      <p>
        Product {product.title} quantity: {product.quantity}
      </p>
      <p>
        Product {product.title} price: {product.price}
      </p>
      <div className="flex gap-5 mt-5">
        <Button onClick={() => updateQuantityProduct('increment')}>
          Increment Quantity
        </Button>
        <Button onClick={() => updateQuantityProduct('decrement')}>
          Decrement Quantity
        </Button>
        <Button onClick={updateProductPrice}>Update Price</Button>
      </div>
    </div>
  );
}

export default ProductDetail;
