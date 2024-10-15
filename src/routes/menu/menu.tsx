import { LoadedAleCore } from '@utils';
import { ReactNode } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

const NotFound = LoadedAleCore(() => import('@pages/not-found/not-found'));
const Login = LoadedAleCore(() => import('@pages/auth/login/login'));
const Register = LoadedAleCore(() => import('@pages/auth/sign-up/sign-up'));
const ProductList = LoadedAleCore(() => import('@pages/products/product-list'));
const ProductDetail = LoadedAleCore(
  () => import('@pages/products/product-detail'),
);
const Product = LoadedAleCore(() => import('@pages/products/product'));

interface IMenu {
  title: string;
  path: string;
  exact: boolean;
  element: ReactNode;
  children: Partial<IMenu>[];
  to: string;
  search: string;
}

const path = [
  {
    path:"", to:"product"
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <Register />,
  },
  {
    title: 'Product',
    path: 'product',
    element: <Product />,
    children: [
      {
        path:"", to:"list"
      },
      {
        title: 'Product Detail',
        path: 'detail',
        element: <ProductDetail />,
      },
      {
        title: 'Product List',
        path: 'list',
        element: <ProductList />,
      },
    ],
  },
];

export const GetMenu = () => {
  const ItemRoute = (item: Partial<IMenu>) => {
    const {search} = useLocation()
    const { path, element, children, to } = item;
    return to ? (
      <Route
        path={path}
        element={
          <Navigate
            to={{
              pathname: to,
              search: search,
            }}
          />
        }
        key={path}
      >
        {Array.isArray(children) && ListRoute(children)}
      </Route>
    ) : (
      <Route path={path} element={element} key={path}>
        {Array.isArray(children) && ListRoute(children)}
      </Route>
    );
  };
  const ListRoute = (list: Partial<IMenu>[]) => {
    return list.map((item) => ItemRoute(item));
  };
  return (
    <Routes>
      {ListRoute(path)}
      <Route path={'*'} element={<NotFound />} />
    </Routes>
  );
};
