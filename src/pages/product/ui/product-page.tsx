import { Container, Flex, Text, Title, Image, Button } from "@mantine/core";
import { useProduct } from "../../../shared/hooks/product/use-product";
import { PreLoader } from "../../../shared/ui/Loader/loader";
import { useNavigate } from "react-router";

export default function ProductPage() {
  const { product } = useProduct();
  const navigate = useNavigate();

  return (
    <section className="product-page">
      <Container size="xl">
        <Flex
          wrap={"wrap"}
          justify={"space-between"}
          align={"stretch"}
          gap={25}
        >
          {!product && <PreLoader />}
          {product && (
            <Flex direction="row" gap={50} className="product-wrapper">
              <Image
                className="product-image"
                src={product?.image}
                w={350}
                fit="contain"
              />
              <Flex direction="column" gap="md">
                <Title order={1}>{product?.title}</Title>
                <Text size="lg" c="dark">
                  {product?.description}
                </Text>
                <Text size="xl" fw={700}>
                  ${product?.price}
                </Text>

                <Text size="md" c="dimmed">
                  Category: {product?.category}
                </Text>

                <Text size="md" c="dimmed">
                  Rating: {product?.rating?.rate}
                </Text>

                <Text size="md" c="dimmed">
                  Count: {product?.rating?.count}
                </Text>
                <Flex justify={'space-between'} gap={30}>
                  <Button w={'100%'} variant="light" color="blue" size="md" mt="md">
                    Add to Cart
                  </Button>
                  <Button
                    w={'100%'}
                    onClick={() => navigate("/products")}
                    variant="light"
                    color="blue"
                    size="md"
                    mt="md"
                  >
                    Back to Products
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Container>
    </section>
  );
}
