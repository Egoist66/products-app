import { Container, Pagination } from "@mantine/core";
import type { FC } from "react";

export const ProductsPagination: FC<{ total: number; value: number; onChange: (page: number) => void}> = ({
  total,
  onChange,
  value
}) => {
  return (
    <Container size="xl">
      <Pagination total={total} onChange={onChange} value={value} />
    </Container>
  )
};
