import {
    Button,
    Flex,
    PasswordInput,
    Text,
    TextInput,
    Title
} from '@mantine/core';
import type {FC}
from 'react';
import {observer} from 'mobx-react-lite';
import {useAuth} from '../../../../shared/lib/auth/use-auth';

export const LoginForm: FC = observer(() => {
    const {
        isLoading,
        name,
        password,
        authMessage,
        isError,
        handleLogin,
        handleName,
        handlePassword,
    } = useAuth()
    return (
        <form onSubmit={handleLogin}>

            <Flex mb={50} justify={'center'}>
                <Title size='h1'>Welcome to Products App</Title>
            </Flex>


            <TextInput value={name}
                onChange={handleName}
                autoFocus
                mb={10}
                required
                size='md'
                width={100}
                placeholder='Enter your nickname'/>
            <PasswordInput size='md'
                mb={10}
                onChange={handlePassword}
                value={password}
                required
                width={100}
                placeholder="Enter your password"/>

           <Flex justify={'center'} mb={10}>
            <Button size='md' w={'100%'}  disabled={isLoading}
                    type='submit'>
                    {
                    isLoading ? 'Logining...' : 'Login'
                }</Button>
           </Flex>


            <Text size='md'  c={isError ? 'red' : 'blue'}>{authMessage}</Text>

        </form>
    );
});
