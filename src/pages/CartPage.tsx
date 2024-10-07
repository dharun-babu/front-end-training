import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { ProductContextType } from "../utilies/type/Types";
import CartComponents from "../components/CartComponents";
import SummaryComponents from "../components/SummaryComponents";
import NoItemsComponent from "../components/NoItemsComponents";
import { EMPTY_CART } from "../constants/constants";

const CartPage = () => {
  const { cartItems } = useContext(ProductContext) as ProductContextType;

  if (cartItems.length === 0) {
    return <NoItemsComponent iconName="cartempty" message={EMPTY_CART} />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Cart Page</h1>
      <div className="flex flex-row space-x-2">
        <div className="w-2/3 h-full mt-4">
          <ul className="w-full h-screen overflow-auto">
            {cartItems.map((item) => (
              <li key={item.id} className="mb-5">
                <CartComponents item={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 h-96 mt-4 font-bold flex flex-col justify-center items-center bg-white rounded space-y-10 pl-5 pr-5">
          <SummaryComponents />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
