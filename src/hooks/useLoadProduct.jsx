import { useEffect, useState } from "react";
import { api } from "../services/api";

export const useLoadProduct = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);

        const accessToken = localStorage.getItem("accessToken");

        const response = await api.get("/products/sync", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = response.data;
        setProductList(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  return { productList, isLoading, error };
};
