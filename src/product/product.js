import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/GetProductData/actions'; // Adjust path based on your project structure
import { Row, Col } from 'antd';
import ProductCard from './productCard';

const ProductView = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    // console.log('Added to cart:', product);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Product View</h1>
      <Row gutter={[16, 16]}>
        {products.map(product => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <ProductCard product={product} onAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductView;
