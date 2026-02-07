import { useEffect, useState } from "react";
import { getProductsApi } from "../../api/products/config";
import { useAuth } from "../auth/use-auth";
import type { ProductsResponse } from "../../api";

export const useProducts = () => {
  const productsApi = getProductsApi();
  const { isAuthenticated } = useAuth();

  const [products, setProducts] = useState<ProductsResponse['products'] | null>(null);
  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
       
        const productsData = await productsApi.getProducts();
        console.log(productsData)

        if (productsData && productsData.length) {
          setProducts(productsData);
        }
      }
    })();
    document.title = "Products";
  }, []);

  return {
    products,
  };
};
