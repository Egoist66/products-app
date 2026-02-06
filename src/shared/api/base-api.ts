import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

/**
 * Базовый класс для API клиентов.
 * Предоставляет общую конфигурацию axios и методы для HTTP запросов.
 */
export class BaseApi {
    protected readonly client: AxiosInstance;

    constructor(baseURL: string, config?: AxiosRequestConfig) {
        this.client = axios.create({
            baseURL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
            ...config,
        });

        this.setupInterceptors();
    }

    /**
     * Настройка interceptors для запросов и ответов.
     * Можно добавить обработку ошибок, токенов и т.д.
     */
    private setupInterceptors(): void {
        // Request interceptor
        this.client.interceptors.request.use(
            (config) => {
                // Здесь можно добавить токены авторизации
                // const token = localStorage.getItem('token');
                // if (token) {
                //     config.headers.Authorization = `Bearer ${token}`;
                // }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Response interceptor
        this.client.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            (error) => {
                // Здесь можно добавить глобальную обработку ошибок
                // Например, редирект на логин при 401
                return Promise.reject(error);
            }
        );
    }

    /**
     * GET запрос
     */
    protected async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.get<T>(url, config);
        return response.data;
    }

    /**
     * POST запрос
     */
    protected async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.post<T>(url, data, config);
        return response.data;
    }

    /**
     * PUT запрос
     */
    protected async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.put<T>(url, data, config);
        return response.data;
    }

    /**
     * PATCH запрос
     */
    protected async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.patch<T>(url, data, config);
        return response.data;
    }

    /**
     * DELETE запрос
     */
    protected async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.delete<T>(url, config);
        return response.data;
    }
}
