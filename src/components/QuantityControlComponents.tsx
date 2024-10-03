import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType, QuantityControl, CartItem } from "../utilies/type/Types";

const QuantityControlComponents = ({
  productId,
  initialCount,
}: QuantityControl) => {
	const {cartItems, decrementFromCart, addToCart} = useContext(ProductContext) as ProductContextType;

	const handleIncrement = (productId: number) => {
    const product = cartItems.find((item: CartItem) => item.id === productId);
    if (product) {
      addToCart({ ...product });
    }
  };

  const handleDecrement = (productId: number) => {
    decrementFromCart(productId);
  };

  return (
    <div key={productId} className="flex items-center space-x-2">
      <button
        onClick={() => handleDecrement(productId)}
        className="bg-red-500 hover:bg-red-700 text-white text-lg rounded px-2"
      >
        -
      </button>
      <span className="text-lg">{initialCount}</span>
      <button
        onClick={() => handleIncrement(productId)}
        className="bg-green-500 hover:bg-green-700 text-white text-lg rounded px-2"
      >
        +
      </button>
    </div>
  );
};

export default QuantityControlComponents;
