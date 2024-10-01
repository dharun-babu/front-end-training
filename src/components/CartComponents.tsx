import { useContext } from 'react';
import { ProductContext, CartItem } from '../contexts/ProductContext';
import Button from '../components/storyComponents/Button';

const CartComponents = () => {
  const { cartItems, removeFromCart, calculateTotalPrice, addToCart, decrementFromCart } = useContext(ProductContext) as any;

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleIncrement = (productId: number) => {
    const product = cartItems.find((item: any) => item.id === productId);
    if (product) {
      addToCart({ ...product });
    }
  };

  const handleDecrement = (productId: number) => {
    decrementFromCart(productId);
  };

  return (
    <div className="flex space-x-10">
      <ul className="w-2/3 h-full">
        {cartItems.map((item: CartItem) => (
          <li key={item.id} className="flex items-center justify-between border-b py-2 bg-white">
            <div className="flex items-center space-x-4">
              <img src={`${item.image}`} alt={item.name} className="w-20 h-20 object-cover" />
              <div>
                <div>{item.name}</div>
                <div>${item.price} x {item.count}</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => handleDecrement(item.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded"
                >
                  -
                </Button>
                <div>{item.count}</div>
                <Button
                  onClick={() => handleIncrement(item.id)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-1 px-2 rounded"
                >
                  +
                </Button>
              </div>
              <div className="ml-4">
                <div>Total: ${item.total}</div>
                <Button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                >
                  Remove
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="w-1/3 h-full mt-4 font-bold flex flex-col justify-center items-center bg-white rounded">
			  <h1 className="text-2xl"> Summary</h1>
				<h1 className="text-xl">
        Total Price: ${calculateTotalPrice()}
				</h1>
      </div>
    </div>
  );
};

export default CartComponents;
