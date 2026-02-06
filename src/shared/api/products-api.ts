import { BaseApi } from './base-api';

/**
 * Типы для продуктов (заглушка).
 * Замените на реальные типы из вашего API.
 */
export interface Product {
    id: string;
    name: string;
    description?: string;
    price: number;
    image?: string;
    // Добавьте другие поля по необходимости
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    page?: number;
    limit?: number;
}

export interface ProductQueryParams {
    page?: number;
    limit?: number;
    search?: string;
    sort?: string;
    // Добавьте другие параметры фильтрации
}

/**
 * API клиент для работы с продуктами.
 * Заглушка с методами для CRUD операций.
 */
export class ProductsApi extends BaseApi {
    constructor(baseURL: string) {
        super(baseURL);
    }

    /**
     * Получить список продуктов
     */
    async getProducts(params?: ProductQueryParams): Promise<ProductsResponse> {
        // Заглушка - замените на реальный запрос
        return this.get<ProductsResponse>('/products', { params });
    }

    /**
     * Получить продукт по ID
     */
    async getProductById(id: string): Promise<Product> {
        // Заглушка - замените на реальный запрос
        return this.get<Product>(`/products/${id}`);
    }

    /**
     * Создать новый продукт
     */
    async createProduct(data: Omit<Product, 'id'>): Promise<Product> {
        // Заглушка - замените на реальный запрос
        return this.post<Product>('/products', data);
    }

    /**
     * Обновить продукт
     */
    async updateProduct(id: string, data: Partial<Product>): Promise<Product> {
        // Заглушка - замените на реальный запрос
        return this.put<Product>(`/products/${id}`, data);
    }

    /**
     * Удалить продукт
     */
    async deleteProduct(id: string): Promise<void> {
        // Заглушка - замените на реальный запрос
        return this.delete<void>(`/products/${id}`);
    }
}
