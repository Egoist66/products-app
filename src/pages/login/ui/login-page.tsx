import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LoginForm } from '../../../features/auth/login-form/ui/login-form';
import { observer } from 'mobx-react-lite';
import { useAuth } from '../../../shared/hooks/auth/use-auth';
import { Flex } from '@mantine/core';
import { useTheme } from '../../../shared/hooks/theme/use-theme';

const LoginPage = observer(() => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useTheme();

  // Получаем сохраненный путь из state или используем '/products' по умолчанию
  const from = (location.state as { from?: string })?.from || '/products';

  useEffect(() => {
    if (isAuthenticated) {
      // Перенаправляем на сохраненный путь или по умолчанию
      navigate(from, { replace: true });
    }

    document.title = 'Login';
  }, [isAuthenticated, navigate, from]);

  return (
    <section className='login-page'>
      <Flex
        gap={20}
        maw='600px'
        style={{
          margin: '0 auto',
          padding: '0 16px',
        }}
        mih='100vh'
        justify='center'
        direction='column'
      >
        <LoginForm />
      </Flex>
    </section>
  );
});

export default LoginPage;