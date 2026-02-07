// Страница /products (заглушка).
// Здесь позже реализуете:
// - список карточек продуктов
// - сортировку
// - пагинацию
// - поиск
// - открытие модального окна добавления/редактирования.
import { ProductsListWidget } from '../../../widgets/products-list/ui/products-list-widget';

export default function ProductsPage() {

  
  return (
    <section className='products-page'>

      
    
      <ProductsListWidget />
      
    </section>
  );
};

