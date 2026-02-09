// Страница /products (заглушка).
// Здесь позже реализуете:
// - список карточек продуктов
// - сортировку
// - пагинацию
// - поиск
// - открытие модального окна добавления/редактирования.
import { Container, Flex } from "@mantine/core";
import { ProductsSearch } from "../../../features/products/search/ui/products-search";
import { useSearchProducts } from "../../../shared/hooks/products/use-search-products";
import { useSortProducts } from "../../../shared/hooks/products/use-sort-products";
import { ProductsListWidget } from "../../../widgets/products-list/ui/products-list-widget";
import { Suspense } from "react";
import { ProductsPagination } from "../../../features/products/pagination/ui/products-pagination";
import { useProducts } from "../../../shared/hooks/products/use-products";
import { usePagination } from "../../../shared/hooks/products/use-paginations";

import { ActionIcon } from "@mantine/core";
import { IconAdjustments } from "@tabler/icons-react";
import { ProductModal } from "../../../features/products/product-modal/ui/product-modal";
export default function ProductsPage() {
  const { deferredSearchTerm, handleSearchTermChange, searchTerm } =
    useSearchProducts();
  const { handleSortChange, sort } = useSortProducts();
  const { products } = useProducts();
  const { pageProducts, setPage, totalPages, page } = usePagination(products);

  return (
    <section className="products-page">
      <Container size="xl">
        <Flex
          mb={50}
          align={"center"}
          justify={"space-between"}
          wrap={"wrap"}
          gap={20}
        >
          <ProductsSearch
            searchValue={searchTerm}
            onSearchTermChange={handleSearchTermChange}
          />
          <Flex align={"center"} gap={20}>
            <ActionIcon
              title={
                sort === "asc"
                  ? "switch to descending order"
                  : "switch to ascending order"
              }
              size={"xl"}
              onClick={handleSortChange}
            >
              <IconAdjustments />
            </ActionIcon>

            <ProductModal mode="edit" />
            <ProductModal mode="add" />
          </Flex>
        </Flex>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsListWidget
          searchValue={deferredSearchTerm}
          sort={sort}
          products={pageProducts}
        />
      </Suspense>

      <ProductsPagination value={page} total={totalPages} onChange={setPage} />
    </section>
  );
}
