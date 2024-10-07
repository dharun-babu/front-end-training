import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType, QuantityControl } from "../utilies/type/Types";
import Button from "./storyComponents/Button";

const QuantityControlComponents = ({ productId, initialCount }: QuantityControl) => {
  const { cartItems, decrementFromCart, addToCart } = useContext(ProductContext) as ProductContextType;
	
  const product = cartItems.find(item => item.id === productId);
  return (
    <div className="flex items-center space-x-2">
      <Button onClick={() => decrementFromCart(productId)} variant="danger" size="sm">
        -
      </Button>
      <span className="text-lg">{initialCount}</span>
      <Button onClick={() => { product && addToCart(product)}} variant="success" size="sm">
        +
      </Button>
    </div>
  );
};

export default React.memo(QuantityControlComponents);
