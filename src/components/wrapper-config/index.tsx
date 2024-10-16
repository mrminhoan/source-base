import { setConfigStorage } from '@utils';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

interface IPropsConfig {
  id?: string;
  children: ReactNode;
  urlRemote?: string;
}
export const WrapperConfig = async (props: IPropsConfig) => {
  const { id = 'root', children, urlRemote = '/assets/config.json' } = props;
  await setConfigStorage(urlRemote);
  const root = ReactDOM.createRoot(document.getElementById(id)!);
  root.render(
    <BrowserRouter>
      {children}
    </BrowserRouter>,
  );
};
