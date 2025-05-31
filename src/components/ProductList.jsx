import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="sf-simpleBff_products" role="list">
      {products.map((product) => (
        <ProductItem key={product.jan} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
