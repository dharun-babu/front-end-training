import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType, QuantityControl } from "../utilies/type/Types";
import { ACTIONS } from "../enums/Actions";
import Button from "./storyComponents/Button";
import { BUTTONS } from "../enums/button";

const QuantityControlComponents = ({ product, initialCount }: QuantityControl) => {
  const { dispatch} = useContext(ProductContext) as ProductContextType;
  return (
    <div className="flex items-center space-x-2">
      <Button onClick={() => dispatch({ type: ACTIONS.DECREMENT_ITEM_COUNT, payload: product.id })} variant={BUTTONS.DANGER} size="sm">
        -
      </Button>
      <span className="text-lg">{initialCount}</span>
      <Button onClick={() => { product && dispatch({ type: ACTIONS.ADD_TO_CART, payload: product })}} variant={BUTTONS.SUCCESS} size="sm">
        +
      </Button>
    </div>
  );
};

export default React.memo(QuantityControlComponents);
