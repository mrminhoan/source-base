import { setConfigStorage } from '@utils';
import { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@custom-prototype';
import ConfigProvider from 'antd/es/config-provider';
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
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 5,
            colorLinkHover: '#5BC6CC',
            colorLinkActive: '#5BC6CC',
            colorPrimary: '#5BC6CC',
            colorPrimaryActive: '#5BC6CC',
            colorPrimaryTextActive: '#5BC6CC',
            colorLink: '#5BC6CC',
            colorPrimaryText: '#5BC6CC',
            colorPrimaryBorder: '#5BC6CC',
            colorPrimaryHover: '#5BC6CC',
            colorPrimaryBorderHover: '#5BC6CC',
            blue1: '#5BC6CC',
            blue2: '#5BC6CC',
            blue3: '#5BC6CC',
            blue4: '#5BC6CC',
            blue5: '#5BC6CC',
            blue6: '#5BC6CC',
            blue7: '#5BC6CC',
            blue8: '#5BC6CC',
            blue9: '#5BC6CC',
            blue10: '#5BC6CC',
            blue: '#5BC6CC',
          },
          components: {
            Input: {
              colorPrimaryText: '#5BC6CC',
              colorPrimaryBorder: '#5BC6CC',
              colorPrimaryHover: '#5BC6CC',
              colorPrimaryBorderHover: '#5BC6CC',
              activeBorderColor: '#5BC6CC',
              hoverBorderColor: '#5BC6CC',
            },
            Select: {
              padding: 60,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </BrowserRouter>,
  );
};
