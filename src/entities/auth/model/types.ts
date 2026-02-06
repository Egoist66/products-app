import type {ChangeEvent, FormEvent} from 'react';

export interface IAuthStore {
    isAuthenticated: boolean;
    isError: boolean;
    driver: AuthDrivers;
    authMessage: string;
    isLoading: boolean;
    name: string;
    password: string;
    login: (e: FormEvent<HTMLFormElement>, driver: AuthDrivers, afterLoginHandler?: () => void) => Promise<void>;
    logout: () => Promise<void>;
    handleName: (e: ChangeEvent<HTMLInputElement>) => void;
    handlePassword: (e: ChangeEvent<HTMLInputElement>) => void;
    authMe: (isUserExist: () => boolean, getUserId: () => string) => Promise<void>
}

export type AuthDrivers = 'google' | 'instagram' | 'yandex' | 'default'