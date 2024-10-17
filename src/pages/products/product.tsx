import { PATH } from '@constants';
import { useStore } from '@tanstack/react-store';
import Button from 'antd/es/button';
import { NavLink, Outlet } from 'react-router-dom';
import { DispatchProductStore } from '../../store';

function Product() {
  const product_quantity = useStore(
    DispatchProductStore.store,
    (state) => state.quantity,
  );

  return (
    <>
      <div>Product Page</div>
      {product_quantity < 90 && (
        <>
          <Button>
            <NavLink to={PATH.PRODUCT.DETAIL} state={{ read: true }}>
              Product detail
            </NavLink>
          </Button>

          <Button>
            <NavLink to={PATH.PRODUCT.LIST}>Product List</NavLink>
          </Button>
          <p>Navigate will be hided when quantity higher 90 </p>
        </>
      )}

      <Outlet />
    </>
  );
}

export default Product;
