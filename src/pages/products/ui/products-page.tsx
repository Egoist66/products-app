// Страница /products (заглушка).
// Здесь позже реализуете:
// - список карточек продуктов
// - сортировку
// - пагинацию
// - поиск
// - открытие модального окна добавления/редактирования.
import { useEffect } from 'react';
import { ProductsListWidget } from '../../../widgets/products-list/ui/products-list-widget';
import { getProductsApi } from '../../../shared/api/config';
import { useAuth } from '../../../shared/hooks/auth/use-auth';

export default function ProductsPage() {

  const {isAuthenticated} = useAuth()
  useEffect(() => {

    ( async () => {
      if(isAuthenticated){
        console.log(await getProductsApi().getProducts())
      }
    })()
    document.title = 'Products'
  }, [])
  return (
    <section className='products-page'>
    
      <ProductsListWidget />
      
    </section>
  );
};

