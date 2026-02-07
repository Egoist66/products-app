import {authStore} from '../../../features/auth/model/auth-store';
import {useLS} from '../service/use-ls';
import { useEffect, type FormEvent } from 'react';

// Фасад-хук над mobx-стором авторизации.
// Компоненты получают доступ через useAuth, а логику и состояние
// храним в features/auth/model.
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
        authMe,
        handleResetUserInputAndMessage,
        name,
        password
    } = authStore
    const {set, getSync, exist, remove} = useLS()

    const setUserData =  async () => {
        await set<{name: string}>('user', {name})
        await set<{userId: string}>('userId', {userId: crypto.randomUUID()})

    }

    const removeUserData = () => {
        remove('user')
        remove('userId')
    }


    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        await login(e, 'default')
        await setUserData()
    }

    const handleLogOut = async () => {
        await logout(removeUserData)
        
    }

    const AmIAuth = async() => {
        authMe(() => exist('user'), () => getSync('userId'))
    }


  

 
    return {
        authMessage,
        handleName,
        handlePassword,
        isAuthenticated,
        isError,
        isLoading,
        handleLogin,
        handleLogOut,
        logout,
        name,
        password,
        AmIAuth,
        setUserData,
        handleResetUserInputAndMessage

    }
}
