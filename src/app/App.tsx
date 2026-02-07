// Главный компонент приложения.

import { useEffect, type FC } from 'react';
import { AppRouterProvider } from './providers/router';
import { Layout } from '../shared/ui/Layout/layout';
import { Header } from '../shared/ui/Header/header';
import { useAuth } from '../shared/hooks/auth/use-auth';

export const App: FC = () => {

  const {AmIAuth} = useAuth()

  useEffect(() => {
    (async () => {
        await AmIAuth()
    })()
}, [])
  return (
      <Layout header={<Header />}>
        <AppRouterProvider />
      </Layout>
  );
};

