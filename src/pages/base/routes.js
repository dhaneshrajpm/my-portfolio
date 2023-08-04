import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Loader from '../../components/Loader';
import PageHandler from './PageHandler';

const Home = lazy(() => import('../Home'));
const Project = lazy(() => import('../Project'));
const Layout = lazy(() => import('./Layout/Layout'));

const history = createBrowserHistory();

console.log(history);

const PageRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Layout history={history} />}>
          <Route path='/project' element={<Project history={history} />} />
          <Route index path='/' element={<Home history={history} />} />
        </Route>
        <Route path='*' element={<PageHandler />} />
      </Routes>
    </Suspense>
  );
}

export default PageRoutes;