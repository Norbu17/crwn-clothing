import { createContext, useState } from "react";

import PRODUCTS from "../../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const product_value = { products };
  return <ProductsContext value={product_value}>{children}</ProductsContext>;
};
