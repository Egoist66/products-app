// Страница /login (заглушка).
// Здесь позже добавите:
// - инпут логина
// - валидацию, что логин === "admin"
// - переход на /products по кнопке.

import {useEffect} from 'react';
import {useNavigate} from 'react-router';
import {LoginForm} from '../../../features/auth/login-form/ui/login-form';
import {observer} from 'mobx-react-lite';
import {useAuth} from '../../../shared/lib/auth/use-auth';
import {Flex} from '@mantine/core';

const LoginPage = observer(() => {
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/products');
        }
    }, [isAuthenticated, navigate]);

    return (
        <section className='login-page'>
            <Flex maw='900px'
                style={
                    {
                        margin: '0 auto',
                        padding: '0 16px'
                    }
                }
                mih='100vh'
                justify='center'
                direction='column'>
                <LoginForm/>
            </Flex>
        </section>
    );
});

export default LoginPage;
