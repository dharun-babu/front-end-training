import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ACTIONS } from "../enums/Actions";
import { ProductContextType, CartItem } from "../utilies/type/Types";
import Button from "../components/storyComponents/Button";
import QuantityControlComponents from "./QuantityControlComponents";
import { BUTTONS } from "../enums/button";

interface CartComponentsProps {
  item: CartItem;
}

const CartComponents = ({ item }: CartComponentsProps) => {
  const { dispatch } = useContext(ProductContext) as ProductContextType;

  return (
    <div className="flex items-center justify-between border-b py-2 bg-white rounded-lg mb-5">
      <div className=" w-3/6 h-full flex items-center space-x-4">
        <div className="w-1/4 flex flex-row justify-center items-center">
          <img
            src={`${item.image}`}
            alt={item.name}
            className="w-20 h-20 object-cover"
          />
        </div>
        <div className="w-3/4 flex flex-row justify-around items-center">
          <div className="flex flex-col justify-around items-center">
            <span className="text-xl font-bold text-start">Product Name</span>
            {item.name}
          </div>
          <div className="flex flex-col justify-around items-center">
            <span className="text-xl font-bold text-start">Quantity</span>
            Rs {item.price} x {item.count}
          </div>
        </div>
      </div>
      <div className="w-3/6 flex flex-row justify-around items-center">
        <QuantityControlComponents product={item} initialCount={item.count} />
        <div className="flex flex-row justify-around items-center">
          <div className="mr-5">
            <span className="text-xl font-bold text-center">Total :</span> Rs{" "}
            {item.total} /-
          </div>
          <div>
            <Button
              onClick={() =>
                dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: item.id })
              }
              variant={BUTTONS.DANGER}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponents;
