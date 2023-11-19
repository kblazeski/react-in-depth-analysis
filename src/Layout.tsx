import { Outlet } from 'react-router';
import { Navigation } from './routing/Navigation';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '1000px' }}>
        <Outlet />
      </div>
    </>
  );
};
