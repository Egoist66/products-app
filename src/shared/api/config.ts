/**
 * Конфигурация API.
 * Использует переменные окружения для настройки базовых URL.
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

/**
 * Создание экземпляра API клиента для продуктов.
 * Используется singleton паттерн для переиспользования одного экземпляра.
 */
import { ProductsApi } from './products-api';

let productsApiInstance: ProductsApi | null = null;

export const getProductsApi = (): ProductsApi => {
    if (!productsApiInstance) {
        productsApiInstance = new ProductsApi(API_BASE_URL);
    }
    return productsApiInstance;
};

/**
 * Экспорт базового URL для использования в других местах при необходимости.
 */
export { API_BASE_URL };
