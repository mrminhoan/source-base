import { LoadedAleCore } from '@utils';
import { PATH } from '@constants';
import { InitPath } from '@routes/guard-route';
import '../../../index.d.ts';

const ProductList = LoadedAleCore(() => import('@pages/products/product-list'));
const ProductDetail = LoadedAleCore(
  () => import('@pages/products/product-detail'),
);
const Product = LoadedAleCore(() => import('@pages/products/product'));
const Feeback = LoadedAleCore(() => import('@pages/feedback/feedback'));
const FeedbackDetail = LoadedAleCore(() => import('@pages/feedback/detail'));
const FeebackList = LoadedAleCore(() => import('@pages/feedback//list'));
const EditorHistory = LoadedAleCore(
  () => import('@pages/feedback/editor-history'),
);
export const path = InitPath([
  {
    path: '',
    to: 'product',
  },

  {
    title: 'Product',
    path: PATH.PRODUCT.ROOT,
    element: <Product />,
    isShowSidebar: true,
    children: [
      {
        path: '',
        to: 'list',
      },
      {
        title: 'Product Detail',
        path: PATH.PRODUCT.DETAIL,
        element: <ProductDetail />,
        isShowSidebar: true,
        key: PATH.PRODUCT.DETAIL.combieKeyUrl(PATH.PRODUCT.ROOT),
      },
      {
        title: 'Product List',
        path: PATH.PRODUCT.LIST,
        element: <ProductList />,
        isShowSidebar: true,
        key: PATH.PRODUCT.LIST.combieKeyUrl(PATH.PRODUCT.ROOT),
      },
    ],
  },
  {
    title: 'Feedback',
    path: PATH.FEEDBACK.ROOT,
    key: PATH.FEEDBACK.ROOT,
    element: <Feeback />,
    isShowSidebar: true,
    children: [
      {
        path: '',
        to: 'list',
      },
      {
        title: 'Feedback Detail',
        path: PATH.FEEDBACK.DETAIL,
        element: <FeedbackDetail />,
        key: PATH.FEEDBACK.DETAIL.combieKeyUrl(PATH.FEEDBACK.ROOT),
        isShowSidebar: true,
      },
      {
        title: 'Feedback List',
        path: PATH.FEEDBACK.LIST,
        element: <FeebackList />,
        isShowSidebar: true,
        key: PATH.FEEDBACK.LIST.combieKeyUrl(PATH.FEEDBACK.ROOT),
      },
      {
        title: 'Editor',
        path: PATH.FEEDBACK.EDITOR,
        element: <EditorHistory />,
        isShowSidebar: true,
        key: PATH.FEEDBACK.EDITOR.combieKeyUrl(PATH.FEEDBACK.ROOT),
      },
    ],
  },
]);
