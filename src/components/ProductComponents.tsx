import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import {
  ProductContextType,
  CartItem,
  WishlistItem,
} from "../utilies/type/Types";
import { ProductDisplayProps } from "../utilies/type/Types";
import Button from "../components/storyComponents/Button";
import Icon from "./Icon";
import QuantityControlComponents from "./QuantityControlComponents";
import withAuthCheck from "./withAuthCheck";

const ProductDisplay = (props: ProductDisplayProps) => {
  const {
    addToCart,
    addToWishlist,
    cartItems,
    wishlistItems,
    removeFromWishlist,
  } = useContext(ProductContext) as ProductContextType;

  const isInCart = cartItems.some(
    (item: CartItem) => item.id === props.product.id
  );

  const isInWishlist = wishlistItems.some(
    (item: WishlistItem) => item.id === props.product.id
  );

  const cartItem = cartItems.find(
    (item: CartItem) => item.id === props.product.id
  );

  return (
    <li
      key={props.product.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <div className="w-full h-full">
        <img
          src={`${props.product.image}`}
          alt={props.product.name}
          className="w-full h-64 object-cover object-center"
        />
        <div className="p-4">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            {props.product.name}
          </h2>
          <p className="text-gray-700 text-base mb-4">
            Rs. {props.product.price}
          </p>
          <div className="flex justify-between items-center">
            {isInCart ? (
              <QuantityControlComponents
                productId={props.product.id}
                initialCount={cartItem ? cartItem.count : 0}
              />
            ) : (
              <Button onClick={() => props.handleAuthCheck(() => addToCart(props.product))} variant="primary">
                Add to Cart
              </Button>
            )}
            {isInWishlist ? (
              <Button onClick={() => removeFromWishlist(props.product.id)} variant="no-style">
                <Icon
                  iconName="heart"
                  fill="red"
                  width="24px"
                  height="24px"
                  color="red"
                />
              </Button>
            ) : (
              <Button onClick={() => props.handleAuthCheck(() => addToWishlist(props.product))} variant="secondary">
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
