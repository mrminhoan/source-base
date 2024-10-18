import { ProductService } from '@service/axios';
import { Fragment } from 'react';
import { useProductStore } from '../../../store';
import ProductItem from '../product-item';
import { Button, Form, Input } from 'antd';
import { Alert } from 'antd';
import {watch} from "valtio/utils"
function ProductList() {
  const {
    productSnapshot,
    actionsProductStore,
    trackingStateChange,
    productStore,
    trackingStateChangeByKey,
  } = useProductStore();
  const onFinish = (values) => {
    actionsProductStore.addProduct(values);
  };
  const handleIncreCount = () => {
    return actionsProductStore.incrementCount();
  };
  const showMesssage = () => {
    return  alert("Add Product SuccessFully");
  };
  // trackingStateChange(productStore.products, showMesssage);
  // trackingStateChangeByKey(productStore.user, "age", console.log)




  return (
    <div className="mt-10">
      <h1>Product List Page</h1>
      {productSnapshot.products.map((product, index) => {
        return (
          <Fragment key={index}>
            <ProductItem {...product} />
          </Fragment>
        );
      })}
      <p>Total Products in Storage: {productSnapshot.quantityAllProducts}</p>
      <Button onClick={handleIncreCount}>Increment Count</Button>
      <h1 className="mt-10 mb-5">Add New Products</h1>
      <Form
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        labelAlign="left"
        onFinish={onFinish}
      >
        <Form.Item
          name={'title'}
          label="Product Name"
          // rules={[{ required: true, message: 'Please input product name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={'price'} label="Product Price">
          <Input type="number" />
        </Form.Item>
        <Form.Item name={'quantity'} label="Product Quantity">
          <Input type="number" />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>


      <Button onClick={() => actionsProductStore.changeUseAge()}>Change User Age</Button>
      <p>TEMREF: {productStore.tempValue.current}</p>
    </div>
  );
}

export default ProductList;
