// Страница /products (заглушка).
// Здесь позже реализуете:
// - список карточек продуктов
// - сортировку
// - пагинацию
// - поиск
// - открытие модального окна добавления/редактирования.

import { LogoutButton } from '../../../features/auth/logout-button/ui/logout-button';
import { ProductsListWidget } from '../../../widgets/products-list/ui/products-list-widget';

export default function ProductsPage() {
  return (
    <main>
      <header>
        <h1>Products page stub</h1>
        {/* Кнопка выхода, позже добавите очистку авторизации и переход на /login */}
        <LogoutButton />
      </header>

      {/* Здесь позже соберёте список продуктов, сортировку, пагинацию, поиск и модалки */}
      <section>
        <ProductsListWidget />
      </section>
    </main>
  );
};

