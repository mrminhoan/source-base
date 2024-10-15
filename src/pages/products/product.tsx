import { NavLink, Outlet } from 'react-router-dom';

function Product() {
  return (
    <>
      <div>Product Page</div>
      <button>
        <NavLink to="/product/detail">Product detail</NavLink>
      </button>
      <button>
        <NavLink to="/product/list">Product List</NavLink>
      </button>
      <Outlet />
    </>
  );
}

export default Product;
