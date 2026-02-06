import type {ChangeEvent, SubmitEvent} from 'react';

export interface IAuthStore {
    isAuthenticated: boolean;
    isLoading: boolean;
    name: string;
    password: string;
    login: (e: SubmitEvent) => Promise<void>;
    logout: () => Promise<void>;
    handleName: (e: ChangeEvent<HTMLInputElement>) => void;
    handlePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}

