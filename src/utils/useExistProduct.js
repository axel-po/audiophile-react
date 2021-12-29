import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function useExistProduct() {
  const storeState = useSelector((state) => state);
  const [existProducts, setExistProducts] = useState(false);

  useEffect(() => {
    if (storeState.cart.length === 0) {
      setExistProducts(false);
    } else {
      setExistProducts(true);
    }
  }, [storeState.cart.length]);

  return existProducts;
}
