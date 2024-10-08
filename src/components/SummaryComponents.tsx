import { useMemo, useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CartItem, ProductContextType } from "../utilies/type/Types";

function SummaryComponents() {
  const { cartItems } = useContext(ProductContext) as ProductContextType;

  const calculateTotalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.total + 10, 0);
  }, [cartItems]);

  return (
    <>
      <div className="h-1/4 w-full border-b-2 flex flex-col justify-center items-center">
        <h1 className="text-3xl">Summary</h1>
      </div>
      <div className="h-2/4 w-full">
        {cartItems.map((item: CartItem) => (
          <div
            key={item.id}
            className="text-md flex flex-row justify-between space-y-2"
          >
            <h1> {item.name}</h1>
            <h1> Rs {item.total} + Rs 10 (GST) </h1>
          </div>
        ))}
      </div>
      <div className="h-1/4 w-full border-t-2 flex flex-row justify-between items-center text-xl">
        <h1>Total Price: </h1>
        <h1>Rs {calculateTotalPrice} /-</h1>
      </div>
    </>
  );
}

export default SummaryComponents;
