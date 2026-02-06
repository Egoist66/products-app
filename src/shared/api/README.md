# API Layer

Слой API для работы с бэкенд сервисами в соответствии с архитектурой FSD.

## Структура

- `base-api.ts` - Базовый класс для всех API клиентов
- `products-api.ts` - API клиент для работы с продуктами
- `config.ts` - Конфигурация и создание экземпляров API клиентов
- `index.ts` - Централизованный экспорт

## Настройка

1. Создайте файл `.env` в корне проекта:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

2. Используйте API клиент в вашем коде:

```typescript
import { getProductsApi } from '@/shared/api/config';

const productsApi = getProductsApi();

// Получить список продуктов
const products = await productsApi.getProducts({ page: 1, limit: 10 });

// Получить продукт по ID
const product = await productsApi.getProductById('123');

// Создать продукт
const newProduct = await productsApi.createProduct({
  name: 'New Product',
  price: 100,
});

// Обновить продукт
const updated = await productsApi.updateProduct('123', { price: 150 });

// Удалить продукт
await productsApi.deleteProduct('123');
```

## Расширение

Для добавления новых API клиентов:

1. Создайте новый класс, наследующийся от `BaseApi`:
```typescript
export class UsersApi extends BaseApi {
  constructor(baseURL: string) {
    super(baseURL);
  }
  
  async getUsers() {
    return this.get('/users');
  }
}
```

2. Добавьте в `config.ts`:
```typescript
export const getUsersApi = (): UsersApi => {
  if (!usersApiInstance) {
    usersApiInstance = new UsersApi(API_BASE_URL);
  }
  return usersApiInstance;
};
```

3. Экспортируйте в `index.ts`
