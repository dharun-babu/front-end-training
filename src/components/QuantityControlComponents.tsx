import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ACTIONS } from "../enums/Actions";
import { VARIANTS } from "../enums/variants";
import { BUTTON_SIZE } from "../enums/ButtonSize";
import { ProductContextType, QuantityControl } from "../utilies/type/Types";
import Button from "./storyComponents/Button";

const QuantityControlComponents = ({ product, initialCount }: QuantityControl) => {
  const { dispatch} = useContext(ProductContext) as ProductContextType;
  return (
    <div className="flex items-center space-x-2">
      <Button onClick={() => dispatch({ type: ACTIONS.DECREMENT_ITEM_COUNT, payload: product.id })} variant={VARIANTS.DANGER} size= {BUTTON_SIZE.SM}>
        -
      </Button>
      <span className="text-lg">{initialCount}</span>
      <Button onClick={() => { product && dispatch({ type: ACTIONS.ADD_TO_CART, payload: product })}} variant={VARIANTS.SUCCESS} size={BUTTON_SIZE.SM}>
        +
      </Button>
    </div>
  );
};

export default React.memo(QuantityControlComponents);
