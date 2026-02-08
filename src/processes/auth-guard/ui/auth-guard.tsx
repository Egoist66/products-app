

import { useEffect, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { useAuth } from "../../../shared/hooks/auth/use-auth";

export const AuthGuard = observer(({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
   const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
       navigate('/login', { 
        state: { from: location.pathname } 
      });
    }
  }, [isAuthenticated, navigate, location.pathname]);

  return <>{ children}</>;
});
