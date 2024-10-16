import { LoadedAleCore } from '@utils';
import { ReactNode } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { PATH } from '@constants';
import { IMenu } from '@models';
import { InitPath } from '@routes/guard-route';


const ProductList = LoadedAleCore(() => import('@pages/products/product-list'));
const ProductDetail = LoadedAleCore(
  () => import('@pages/products/product-detail'),
);
const Product = LoadedAleCore(() => import('@pages/products/product'));
const Feeback = LoadedAleCore(() => import('@pages/feedback/feedback'));
const FeedbackDetail = LoadedAleCore(() => import('@pages/feedback/detail'));
const FeebackList = LoadedAleCore(() => import('@pages/feedback//list'));

export const path = InitPath([
  {
    path: '',
    to: 'product',
  },
  {
    title: 'Product',
    path: PATH.PRODUCT.ROOT,
    element: <Product />,
    children: [
      {
        path: '',
        to: 'list',
      },
      {
        title: 'Product Detail',
        path: PATH.PRODUCT.DETAIL,
        element: <ProductDetail />,
      },
      {
        title: 'Product List',
        path: PATH.PRODUCT.LIST,
        element: <ProductList />,
      },
    ],
  },
  {
    title: 'Feedback',
    path: PATH.FEEDBACK.ROOT,
    element: <Feeback />,
    children: [
      {
        title: 'Feedback Detail',
        path: PATH.FEEDBACK.DETAIL,
        element: <FeedbackDetail />,
      },
      {
        title: 'Feedback List',
        path: PATH.FEEDBACK.LIST,
        element: <FeebackList />,
      },
    ],
  },
]);
