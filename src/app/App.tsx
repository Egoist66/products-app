// Главный компонент приложения.

import type { FC } from 'react';
import { AppRouterProvider } from './providers/router';
import { Layout } from '../shared/ui/Layout/layout';
import { Header } from '../shared/ui/Header/header';

export const App: FC = () => {
  return (
      <Layout header={<Header />}>
        <AppRouterProvider />
      </Layout>
  );
};

