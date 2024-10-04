import React, { useContext, useCallback, useMemo } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType, CartItem } from "../utilies/type/Types";
import Button from "../components/storyComponents/Button";
import QuantityControlComponents from "./QuantityControlComponents";

interface CartItemRowProps {
  item: CartItem;
  onRemove: (productId: number) => void;
}

const CartComponents = () => {
  const { cartItems, removeFromCart } = useContext(
    ProductContext
  ) as ProductContextType;

  const handleRemoveFromCart = useCallback(
    (productId: number) => {
      removeFromCart(productId);
    },
    [removeFromCart]
  );

  const cartItemList = useMemo(() => {
    return cartItems.map((item: CartItem) => (
      <CartItemRow key={item.id} item={item} onRemove={handleRemoveFromCart} />
    ));
  }, [cartItems, handleRemoveFromCart]);

  return <ul className="w-full h-screen overflow-auto">{cartItemList}</ul>;
};

const CartItemRow = React.memo(({ item, onRemove }: CartItemRowProps) => {
  const { id, image, name, price, count, total } = item;

  return (
    <li className="flex items-center justify-between border-b py-2 bg-white rounded-lg mb-5">
      <div className="w-3/6 h-full flex items-center space-x-4">
        <div className="w-1/4 flex flex-row justify-center items-center">
          <img src={`${image}`} alt={name} className="w-20 h-20 object-cover" />
        </div>
        <div className="w-3/4 flex flex-row justify-around items-center">
          <div className="flex flex-col justify-around items-center">
            <span className="text-xl font-bold text-start">Product Name</span>
            {name}
          </div>
          <div className="flex flex-col justify-around items-center">
            <span className="text-xl font-bold text-start">Quantity</span>
            Rs {price} x {count}
          </div>
        </div>
      </div>
      <div className="w-3/6 flex flex-row justify-around items-center">
        <QuantityControlComponents productId={id} initialCount={count} />
        <div className="flex flex-row justify-around items-center">
          <div className="mr-5">
            <span className="text-xl font-bold text-center">Total :</span> Rs{" "}
            {total} /-
          </div>
          <div>
            <Button onClick={() => onRemove(id)} variant="danger">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
});

export default CartComponents;
