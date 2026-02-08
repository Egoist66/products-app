import { useEffect, useState, useMemo } from "react";
import type { Product } from "../../api";

interface UsePaginationResult {
  page: number;
  totalPages: number;
  pageProducts: Product[];
  startIndex: number;
  endIndex: number;
  totalItems: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  pageSize: number;
  setPageSize: (size: number) => void;
}

export const usePagination = (
  products: Product[] | null,
  initialPageSize: number = 4,
  initialPage: number = 1,
): UsePaginationResult => {
  const [page, setPage] = useState<number>(initialPage);
  const [pageSize, setPageSize] = useState<number>(initialPageSize);

  // Сбрасываем на первую страницу при изменении данных или размера страницы
  useEffect(() => {

    setPage(1);
  }, [products, pageSize]);

  // Рассчитываем данные для пагинации
  const paginationData = useMemo(() => {
    if (!products || products.length === 0) {
      return {
        totalPages: 0,
        pageProducts: [],
        startIndex: 0,
        endIndex: 0,
        totalItems: 0,
      };
    }

    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / pageSize);

    // Корректируем текущую страницу, если она выходит за пределы
    const correctedPage = Math.max(1, Math.min(page, totalPages));
    if (correctedPage !== page) {
      setTimeout(() => setPage(correctedPage), 0);
    }

    const startIndex = (correctedPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalItems);
    const pageProducts = products.slice(startIndex, endIndex);

    return {
      totalPages,
      pageProducts,
      startIndex: startIndex + 1, // +1 для человекочитаемого формата
      endIndex,
      totalItems,
    };
  }, [products, page, pageSize]);

  // Простые навигационные функции
  const nextPage = () => {
    if (page < paginationData.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const updatePageSize = (size: number) => {
    if (size > 0) {
      setPageSize(size);
    }
  };

  return {
    // Основные пропсы для Pagination Mantine
    page,
    totalPages: paginationData.totalPages,
    pageProducts: paginationData.pageProducts,
    startIndex: paginationData.startIndex,
    endIndex: paginationData.endIndex,
    totalItems: paginationData.totalItems,
    setPage,
    nextPage,
    prevPage,
    pageSize,
    setPageSize: updatePageSize,
  };
};
