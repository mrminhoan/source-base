import { PATH } from '@constants';
import { isValidElement } from 'react';
import { Navigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
function GuardPrivateRoute({ component: Component, ...rest }) {
  const isIdentify = true;
  return isIdentify ? (
    isValidElement(Component) ? (
      Component
    ) : (
      <Component />
    )
  ) : (
    <Navigate to={PATH.LOGIN} />
  );
}

export default GuardPrivateRoute;
