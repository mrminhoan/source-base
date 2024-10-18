import { Button } from 'antd';
import React from 'react';
import { useProductStore } from '../../../store';

function ButtonAge() {
  const {productStore, productSnapshot} = useProductStore()
  console.log("render btn")
  return (
    <div>
      <Button onClick={() => ++productStore.user.age}>Change User Age</Button>
      <p>{productSnapshot.user.age}</p>
    </div>
  );
}

export default ButtonAge;
