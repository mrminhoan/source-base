import { PATH } from '@constants';
import Button from 'antd/es/button';
import { NavLink, Outlet } from 'react-router-dom';

function Product() {
  return (
    <>
      <div>Product Page</div>
      <Button>
        <NavLink to={PATH.PRODUCT.DETAIL} state={{ read: true }}>
          Product detail
        </NavLink>
      </Button>
      <Button>
        <NavLink to={PATH.PRODUCT.LIST}>Product List</NavLink>
      </Button>
      <Outlet />
    </>
  );
}

export default Product;
