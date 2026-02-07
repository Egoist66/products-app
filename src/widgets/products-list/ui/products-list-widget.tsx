// Виджет со списком продуктов (заглушка).
// Здесь позже соберёте вместе ProductCard, сортировку, пагинацию, поиск и модалки.

import { Container, Flex } from "@mantine/core";
import { useProducts } from "../../../shared/hooks/products/use-products";
import { ProductCard } from "../../../entities/product";
import { PreLoader } from "../../../shared/ui/Loader/loader";

export const ProductsListWidget = () => {
  const { products} = useProducts();

  if(!products?.length){
    return <PreLoader />
  }

  return (
    <Container size="xl">
      <Flex wrap={'wrap'} justify={'center'} align={'stretch'} gap={25}>
        {products?.length &&
          products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Flex>
    </Container>
  );
};
