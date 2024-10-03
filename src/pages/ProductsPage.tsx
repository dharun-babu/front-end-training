import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { ProductContextType, Product } from '../utilies/Types';
import ProductDisplay from '../components/ProductComponents';

const ProductsPage = () => {
  const { products } = useContext(ProductContext) as ProductContextType;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Products Page</h1>
      <p className="text-center mb-8">Welcome to the product page!</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <ProductDisplay key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
