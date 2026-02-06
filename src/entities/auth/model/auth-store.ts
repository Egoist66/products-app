import { makeAutoObservable} from 'mobx';
import type {AuthDrivers, IAuthStore}
from './types';
import {delay} from '../../../shared/lib/delay';
import type {ChangeEvent, FormEvent} from 'react';

class AuthStore implements IAuthStore {
    isAuthenticated : boolean = false;
    isError : boolean = false;
    driver : 'google' | 'instagram' | 'yandex' | 'default' = 'default';
    isLoading : boolean = false;
    authMessage : string = '';
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

    handleResetUserInputAndMessage = () => {
        this.name = ''
        this.password = ''
        this.authMessage = ''
    }

    login = async (e : FormEvent<HTMLFormElement>, driver : AuthDrivers = 'default', afterLoginHandler?: () => void) => {

        e.preventDefault();

        this.isLoading = true;
        this.isError = false;
        this.authMessage = ''


        await delay(1000);

        switch (driver) {
            case 'default':

                try {
                    


                    if (this.name === 'admin' && this.password === 'admin') {
                        this.authMessage = 'You are logged in!';


                        await delay(500);

                        this.isAuthenticated = true;
                        if(afterLoginHandler){
                            afterLoginHandler()
                        }


                    } else {
                        this.isAuthenticated = false;
                        this.authMessage = 'Nickname or Password are incorrect! Try again';
                        this.isError = true;

                    }
                } finally {
                    this.isLoading = false;

                }

                break;

            default:
                throw new Error('Unknown Auth drivers!');

        }

    }



    logout = async (afterLogOutHandler?: () => void) => {
        this.isAuthenticated = false;
        if(afterLogOutHandler){
            afterLogOutHandler()
        }
    }

    authMe = async (isUserExist: () => boolean, getUserId: () => string) => {
        if(isUserExist()){
           if(getUserId()){
            this.isAuthenticated = true
           }
        }
    }
}

export const authStore = new AuthStore();
