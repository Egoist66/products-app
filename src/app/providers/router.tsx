import {lazy} from 'react';
import {AuthGuard} from '../../processes/auth-guard/ui/auth-guard';
import {Navigate, Route, Routes} from 'react-router';


const LazyLoginPage = lazy(() => import ('../../pages/login/ui/login-page'));
const LazyProductsPage = lazy(() => import ('../../pages/products/ui/products-page'));


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
