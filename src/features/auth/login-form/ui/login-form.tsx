import {Button, PasswordInput, TextInput} from '@mantine/core';
import {LoginButton} from '../../login-button/ui/login-button';
import type {FC}
from 'react';
import {observer} from 'mobx-react-lite';
import {useAuth} from '../../../../shared/lib/auth/use-auth';

export const LoginForm: FC = observer(() => {
    const {
        isAuthenticated,
        isLoading,
        name,
        password,
        login,
        handleName,
        handlePassword
    } = useAuth()
    return (
        <form onSubmit={login}>


            <TextInput value={name}
                onChange={handleName}
                required
                size='md'
                placeholder='Enter your nickname'/>
            <PasswordInput size='md'
                onChange={handlePassword}
                value={password}
                required
                width={100}
                placeholder="Enter your password"/>

            <Button disabled={isLoading} type='submit'>{isLoading ? 'Logining...': 'Login'}</Button>


        </form>
    );
});
