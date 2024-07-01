import React, { useState } from 'react';
import { Card, Button, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/GetCartData/cartSlice';

const { Meta } = Card;

const ProductCard = ({ product }) => {
 console.log('Product:', product); 
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Card
        hoverable
        style={{ width: 240, margin: '20px' }}
        cover={<img alt={product?.title} src={product.image} style={{ height: 280 }} />}
      >
        <Meta title={product?.title} description={`$${product.price}`} />
        <Button type="primary" onClick={showModal} style={{ marginTop: '10px', marginRight: '5px' }}>
          View Details
        </Button>
         <Button key="addToCart" type="primary" onClick={handleAddToCart} style={{ marginTop: '10px' }}>
          Add to Cart
        </Button>
      </Card>
      <Modal
        title={product.title}
        visible={modalVisible}
        onCancel={hideModal}
        footer={[
          <Button key="back" onClick={hideModal}>
            Close
          </Button>,
        ]}
      >
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
      </Modal>
    </>
  );
};

export default ProductCard;
