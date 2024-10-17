import { PATH } from '@constants';
import { IMenu } from '@models';
import { LoadedAleCore } from '@utils';
import { GuarPublicRoute, GuardPrivateRoute } from '@routes/guard-route';

const Login = LoadedAleCore(() => import('@pages/auth/login/login'));
const Register = LoadedAleCore(() => import('@pages/auth/sign-up/sign-up'));
const HomePage = LoadedAleCore(() => import('@pages/home'));
const NotFound = LoadedAleCore(() => import('@pages/not-found/not-found'));

export const InitPath = (children: Partial<IMenu>[]): Partial<IMenu>[] => {
  return [
    {
      path: PATH.LOGIN,
      element: <GuarPublicRoute component={<Login />} />,
    },
    {
      path: PATH.SignUp,
      element: <GuarPublicRoute component={<Register />} />,
    },
    {
      path: '',
      title:"Menu",
      element: <GuardPrivateRoute component={<HomePage />} />,
      children
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ];
};
