import { Container, Flex, Text } from "@mantine/core";
import { ProductCard } from "../../../entities/product";
import { PreLoader } from "../../../shared/ui/Loader/loader";
import type { FC } from "react";
import type { Product } from "../../../shared/api";

export const ProductsListWidget: FC<{
  searchValue: string;
  products: Product[] | null
  sort: "asc" | "desc";
}> = ({ searchValue, sort, products }) => {

  if (!products?.length) {
    return <PreLoader />;
  }

  const filteredProducts = products?.filter(
    (product) =>
      !searchValue ||
      product.title.toLowerCase().includes(searchValue.toLowerCase())
  ).sort((productA, productB) => sort === "asc" ? productA.price - productB.price : productB.price - productA.price);

  return (
    <Container size="xl" mb={50}>
      <Flex wrap={"wrap"} justify={"center"} align={"stretch"} gap={25}>
        {filteredProducts?.length ? (
          filteredProducts?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <Text size="lg" c="dimmed">
            No products found
          </Text>
        )}
      </Flex>
    </Container>
  );
};
