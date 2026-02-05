// Процесс, закрывающий доступ к приватным страницам (заглушка).
// Здесь позже можно будет реализовать проверку авторизации и редирект на /login.

import type { ReactNode } from 'react';

export const AuthGuard = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

