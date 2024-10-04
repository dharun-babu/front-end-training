import React, { useContext, useMemo, useCallback } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType, QuantityControl, CartItem } from "../utilies/type/Types";
import Button from "./storyComponents/Button";

const QuantityControlComponents = ({ productId, initialCount } : QuantityControl) => {
  const { cartItems, decrementFromCart, addToCart } = useContext(ProductContext) as ProductContextType;

  const product = useMemo(() => {
    return cartItems.find((item: CartItem) => item.id === productId);
  }, [cartItems, productId]);

  const handleIncrement = useCallback(() => {
    if (product) {
      addToCart({ ...product });
    }
  }, [addToCart, product]);

  const handleDecrement = useCallback(() => {
    decrementFromCart(productId);
  }, [decrementFromCart, productId]);

  return (
    <div key={productId} className="flex items-center space-x-2">
      <Button onClick={handleDecrement} variant="danger" size="sm">
        -
      </Button>
      <span className="text-lg">{initialCount}</span>
      <Button onClick={handleIncrement} variant="success" size="sm">
        +
      </Button>
    </div>
  );
};

export default React.memo(QuantityControlComponents);
