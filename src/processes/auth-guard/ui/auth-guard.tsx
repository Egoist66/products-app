// Процесс, закрывающий доступ к приватным страницам (заглушка).
// Здесь позже можно будет реализовать проверку авторизации и редирект на /login.

import type {ReactNode} from 'react';
import {Navigate} from 'react-router';
import {observer} from 'mobx-react-lite';
import {useAuth} from '../../../shared/lib/auth/use-auth';

export const AuthGuard = observer(({children}: { children: ReactNode }) => {
    const {isAuthenticated} = useAuth();

    if (!isAuthenticated) {
        
      return <Navigate to="/login"/>;
    }

    return <>{children}</>;
});
