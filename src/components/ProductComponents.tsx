import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType, CartItem, WishlistItem } from "../utilies/type/Types";
import { ProductDisplayProps } from "../utilies/type/Types";
import { ACTIONS } from "../enums/Actions";
import { ICONS } from "../enums/Icons";
import Button from "../components/storyComponents/Button";
import Icon from "./Icon";
import QuantityControlComponents from "./QuantityControlComponents";
import withAuthCheck from "./withAuthCheck";
import { VARIANTS } from "../enums/variants";

const ProductDisplay = ({product, handleAuthCheck}: ProductDisplayProps) => {
  const {
    dispatch,
    cartItems,
    wishlistItems,
  } = useContext(ProductContext) as ProductContextType;

  const isInCart = cartItems.some(
    (item: CartItem) => item.id === product.id
  );

  const isInWishlist = wishlistItems.some(
    (item: WishlistItem) => item.id === product.id
  );

  const cartItem = cartItems.find(
    (item: CartItem) => item.id === product.id
  );

  return (
    <li
      key={product.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="w-full h-full">
        <img
          src={`${product.image}`}
          alt={product.name}
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-4">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            {product.name}
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Rs. {product.price}
          </p>
          <div className="flex justify-between items-center">
            {isInCart ? (
              <QuantityControlComponents
                product={ product}
                initialCount={cartItem ? cartItem.count : 0}
              />
            ) : (
              <Button onClick={() => handleAuthCheck(() => dispatch({ type: ACTIONS.ADD_TO_CART, payload: product }))} variant={VARIANTS.PRIMARY}>
                Add to Cart
              </Button>
            )}
            {isInWishlist ? (
              <Button onClick={() => dispatch({ type: ACTIONS.REMOVE_FROM_WISHLIST, payload: product.id })} variant={VARIANTS.DANGER}>
                <Icon
                  iconName= {ICONS.HEART}
                  fill="red"
                  width="24px"
                  height="24px"
                  color="red"
                />
              </Button>
            ) : (
              <Button onClick={() => handleAuthCheck(() => dispatch({ type: ACTIONS.ADD_TO_WISHLIST, payload: product }))} variant={VARIANTS.SECONDARY}>
                Add to Wishlist
              </Button>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};

export default withAuthCheck(React.memo(ProductDisplay));
