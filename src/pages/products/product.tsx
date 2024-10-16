import { PATH } from '@constants';
import { NavLink, Outlet } from 'react-router-dom';

function Product() {
  return (
    <>
      <div>Product Page</div>
      <button>
        <NavLink to={PATH.PRODUCT.DETAIL} state={{ read: true }}>
          Product detail
        </NavLink>
      </button>
      <button>
        <NavLink to={PATH.PRODUCT.LIST}>Product List</NavLink>
      </button>
      <Outlet />
    </>
  );
}

export default Product;
