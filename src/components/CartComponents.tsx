import { useContext } from 'react';
import { ProductContext} from '../contexts/ProductContext';
import { ProductContextType, CartItem } from '../utilies/Types';
import Button from '../components/storyComponents/Button';
import QuantityControlComponents from './QuantityControlComponents';

const CartComponents = () => {
  const { cartItems, removeFromCart} = useContext(ProductContext) as ProductContextType;

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  return (
      <ul className="w-full h-screen overflow-auto">
        {cartItems.map((item: CartItem) => (
          <li key={item.id} className="flex items-center justify-between border-b py-2 bg-white rounded-lg mb-5">
            <div className=" w-3/6 h-full flex items-center space-x-4">
						  <div className="w-1/4 flex flex-row justify-center items-center">
              	<img src={`${item.image}`} alt={item.name} className="w-20 h-20 object-cover" />
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
              <QuantityControlComponents productId={item.id} initialCount={item.count}/>
              <div className="flex flex-row justify-around items-center">
                <div className="mr-5"><span className="text-xl font-bold text-center">Total :</span> Rs {item.total} /-</div>
                <div>
								<Button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white rounded"
                >
                  Remove
                </Button>
								</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
  );
};

export default CartComponents;
