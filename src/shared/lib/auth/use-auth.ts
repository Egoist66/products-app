import {authStore} from '../../../entities/auth/model/auth-store';
import {useLS} from '../service/use-ls';
import type { FormEvent } from 'react';

// Фасад-хук над mobx-стором авторизации.
// Компоненты получают доступ через useAuth, а логику и состояние
// храним в entities/auth.
export const useAuth = () => {

    const {
        authMessage,
        handleName,
        handlePassword,
        isAuthenticated,
        isError,
        isLoading,
        login,
        logout,
        name,
        password
    } = authStore
    const {set} = useLS()

    const setUserData =  async () => {
        await set<{name: string, userId: string}>('user', {name, userId: crypto.randomUUID()})
    }


    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        await login(e, 'default')
        await setUserData()
    }

 
    return {
        authMessage,
        handleName,
        handlePassword,
        isAuthenticated,
        isError,
        isLoading,
        handleLogin,
        logout,
        name,
        password,
        setUserData

    }
}
