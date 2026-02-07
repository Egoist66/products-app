// Процесс, закрывающий доступ к приватным страницам (заглушка).
// Здесь позже можно будет реализовать проверку авторизации и редирект на /login.

import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { useAuth } from "../../../shared/hooks/auth/use-auth";

export const AuthGuard = observer(({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return <>{ children}</>;
});
