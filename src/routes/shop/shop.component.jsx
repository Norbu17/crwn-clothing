import SHOP_DATA from "../../shop-data.json";
import { ProductsContext } from "../../components/contexts/product.context";
import { useContext } from "react";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
