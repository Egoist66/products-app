import {makeAutoObservable} from 'mobx';
import type {IAuthStore}
from './types';
import {delay} from '../../../shared/lib/delay';
import type {ChangeEvent, SubmitEvent}
from 'react';

class AuthStore implements IAuthStore {
    isAuthenticated : boolean = false;
    isLoading : boolean = false;
    name : string = '';
    password : string = '';

    constructor() {
        makeAutoObservable(this);
    }

    handleName = (e : ChangeEvent < HTMLInputElement >) => {
        this.name = e.currentTarget.value;
    };

    handlePassword = (e : ChangeEvent < HTMLInputElement >) => {
        this.password = e.currentTarget.value;
    };

    login = async (e : SubmitEvent) => {
        e.preventDefault()

        this.isLoading = true;
        await delay(1000)
        try {
            if (this.name === 'admin' && this.password === 'admin') {
                this.isAuthenticated = true;

            } else {
                this.isAuthenticated = false;

            }
        } finally {
            this.isLoading = false;
        }
    }

    logout = async () => { // TODO: при необходимости чистить токены/данные пользователя
        this.isAuthenticated = false;
    }
}

export const authStore = new AuthStore();
