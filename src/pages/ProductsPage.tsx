import Products from "../data/ProductsDate";
import {Product } from '../utilies/type/Types';
import ProductComponents from '../components/ProductComponents';

const ProductsPage = () => { 

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Products Page</h1>
      <p className="text-center mb-8">Welcome to the product page!</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Products.map((product: Product) => (
          <ProductComponents key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
