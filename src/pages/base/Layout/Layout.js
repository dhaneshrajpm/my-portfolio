import React from 'react';
import NavMenu from '../../../components/NavMenu/NavMenu';
import { Outlet } from 'react-router-dom';

const Layout = ({ history }) => {
  return (
    <>
      <NavMenu active={[`${history.location.pathname}`]} history={history} />
      <Outlet />
    </>
  );
}

export default Layout;