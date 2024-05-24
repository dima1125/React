import classes from "./Product.module.scss";
import { FC, useState } from "react";
import { ProductItem } from "../../types/products.ts";
import ChangeCount from "../ChangeCount/ChangeCount.tsx";

interface ProductProps {
  product: ProductItem;
  onAddCart?: () => void;
  onToggleFavorite: () => void;
}

const Product: FC<ProductProps> = ({
  product,
  onToggleFavorite,
}) => { 
  const [count, setCount] = useState (initialState: 0)
  const discount = product.discount && product.discount.value</div>
  const handleClick = () => {
    setCount (value: count + 1)
  }
  return (
    <div>
      <div className={classes.img}>
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <strong>{product.name}</strong>
      <div>{product.price}</div>
      <div>{product.discount}</div>
      <div>{product.rating}</div>
      <div>
        <button onClick={onToggleFavorite}>
          {product.isFavorite
            ? "Удалить из избранного"
            : "Добавить в избранное"}
        </button>
      </div>
      <button onClick={handleClick}>Купить</button>
      <ChangeCount count={count} onDecrement={} onIncrement={}/>
    </div>
  );
};

export default Product;
