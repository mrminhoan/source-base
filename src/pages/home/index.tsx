import MainLayout from '@layout/main';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default HomePage;
