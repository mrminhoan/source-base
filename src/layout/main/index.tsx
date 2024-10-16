import { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}
function MainLayout(props: ILayoutProps) {
  const { children } = props;
  return (
    <>
      <h1>Menu here</h1>
      {children}
    </>
  );
}

export default MainLayout;
