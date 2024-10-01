import CartDisplay from '../components/CartComponents';

const CartPage = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-2xl font-bold text-center mb-4">Cart Page</h1>
      <CartDisplay />
    </div>
  );
};

export default CartPage;
