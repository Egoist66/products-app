import {lazy} from 'react';
import {AuthGuard} from '../../processes/authGuard/ui/AuthGuard';
import {Navigate, Route, Routes} from 'react-router';


const LazyLoginPage = lazy(() => import ('../../pages/login/ui/LoginPage'));
const LazyProductsPage = lazy(() => import ('../../pages/products/ui/ProductsPage'));


const routes = [
    {
        path: '/',
        element: <LazyProductsPage/>}, {
        path: '/login',
        element: <LazyLoginPage/>}, {
        path: '/products',
        element: (
            <AuthGuard>
                <LazyProductsPage/>
            </AuthGuard>
        )
    }, {
        path: '*',
        element: <Navigate to="/"/>
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
