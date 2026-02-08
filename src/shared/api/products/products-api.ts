import { delay } from '../../utils/delay';
import { BaseApi } from '../base-api';
import type { Product, ProductsResponse } from './types';

export class ProductsApi extends BaseApi {
    constructor(baseURL: string) {
        super(baseURL);
    }

    async getProducts(): Promise<ProductsResponse['products']> {
        await delay(1000)
        return this.get<ProductsResponse['products']>('/products');
    }

  
    async getProductById(id: string): Promise<Product> {
        await delay(1000)
        return this.get<Product>(`/products/${id}`);
    }

    /**
     * Создать новый продукт
     */
    async createProduct(data: Omit<Product, 'id'>): Promise<Product> {
        return this.post<Product>('/products', data);
    }

   
    async updateProduct(id: string, data: Partial<Product>): Promise<Product> {
        return this.put<Product>(`/products/${id}`, data);
    }

  
    async deleteProduct(id: string): Promise<void> {
        return this.delete<void>(`/products/${id}`);
    }
}
