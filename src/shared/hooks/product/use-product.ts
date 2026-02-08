import { useEffect, useState } from "react";
import type { Product } from "../../api";
import { getProductsApi } from "../../api/products/config";
import { useParams } from "react-router";

export const useProduct = () => {
  const productsApi = getProductsApi();
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams<{ category: string; id: string }>();

  useEffect(() => {
    (async () => {
      if (params.id) {
        const productData = await productsApi.getProductById(params.id);
        if (productData) {
          setProduct(productData);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (product) {
      document.title = `${product?.title} — Products App`;
    }
  }, [product]);

  return {
    product,
    params,
  };
};
