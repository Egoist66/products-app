/**
 * Экспорт API клиентов.
 * Централизованная точка входа для всех API запросов.
 */

export { BaseApi } from './base-api';
export { ProductsApi } from './products/products-api';
export type { Product, ProductsResponse } from './products/types';
