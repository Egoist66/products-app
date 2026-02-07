import { lazy } from 'react';
import { Route, Routes } from 'react-router';

const LazyLoginPage = lazy(() => import('../../pages/login/ui/login-page'));
const LazyProductsPage = lazy(() => import('../../pages/products/ui/products-page'));
const LazyNotFoundPage = lazy(() => import('../../pages/not-found/ui/not-found-page'));

const routes = [
  {
    path: '/',
    element: (
        <LazyProductsPage />
    ),
  },
  {
    path: '/login',
    element: <LazyLoginPage />,
  },
  {
    path: '/products',
    element: (
        <LazyProductsPage />
    ),
  },
  {
    path: '*',
    element: <LazyNotFoundPage />,
  },
];


export const AppRouterProvider = () => {
    return (
        <Routes> {
            routes.map((route) => (
                <Route key={
                        route.path
                    }
                    {...route}/>
            ))
        } </Routes>
    );
};
