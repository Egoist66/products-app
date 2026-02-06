import {authStore} from '../../../entities/auth/model/auth-store';

// Фасад-хук над mobx-стором авторизации.
// Компоненты получают доступ через useAuth, а логику и состояние
// храним в entities/auth.
export const useAuth = () => authStore;

