import { Badge, Button, Card, Group, Image, Stack, Text } from "@mantine/core";
import { Link } from "react-router";
import type { Product } from "../../../shared/api/products/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const href = product.category
    ? `/product/${encodeURIComponent(product.category)}/${encodeURIComponent(product.id)}`
    : `/product/${encodeURIComponent(product.id)}`;

  return (
    <Link to={href} style={{ textDecoration: "none", color: "inherit" }}>
      <Card
        className="product-card-wrapper"
        component="div"
        w={280}
        miw={260}
        maw={320}
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Card.Section>
          <Image
            src={product.image}
            h={350}
            alt={product.title}
            fallbackSrc="https://placehold.co/320x160/e4e4e7/a1a1aa?text=No+image"
            fit="contain"
          />
        </Card.Section>

        <Stack gap="xs" mt="md" style={{ flex: 1 }}>
          <Group justify="space-between" align="flex-start" wrap="nowrap" gap="xs">
            <Text fw={600} lineClamp={2} size="sm" style={{ flex: 1, minWidth: 0 }}>
              {product.title}
            </Text>
            <Badge color="blue" variant="light" size="sm" style={{ flexShrink: 0 }}>
              {product.price} ₽
            </Badge>
          </Group>

        

          {product.category && (
            <Text size="xs" c="dimmed" tt="uppercase">
              {product.category}
            </Text>
          )}
        </Stack>

        <Button component="div" color="blue" fullWidth mt="md" radius="md" size="sm">
          Buy now
        </Button>
      </Card>
    </Link>
  );
};
