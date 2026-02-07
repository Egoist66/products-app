

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';


import { ProductsApi } from './products-api';

let productsApiInstance: ProductsApi | null = null;

export const getProductsApi = (): ProductsApi => {
    if (!productsApiInstance) {
        productsApiInstance = new ProductsApi(API_BASE_URL);
    }
    return productsApiInstance;
};

export { API_BASE_URL };
