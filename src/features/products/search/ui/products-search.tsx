import {TextInput } from "@mantine/core";
import { type ChangeEvent, type FC } from "react";

export const ProductsSearch: FC<{
  searchValue: string;
  onSearchTermChange: (event: ChangeEvent<HTMLInputElement>) => void;
}> = ({ searchValue, onSearchTermChange }) => {
  return (
      <TextInput
        value={searchValue}
        w={500}
        onChange={onSearchTermChange}
        placeholder="Search products by name"
        size="md"
        variant="filled"
      />
  );
};
