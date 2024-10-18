import { ProductService } from '@service/axios';
import { useEffect } from 'react';
import { useUserStore } from '../../store';
import { Button } from 'antd';
import { useShallow } from 'zustand/react/shallow'

function ProductList() {
  const userFirstName = useUserStore(useShallow((state) => state.user.firstName));
  // const userLastName = useUserStore(useShallow((state) => state.user.lastName));
  const userLastName = useUserStore((state) => state.user.lastName);

  const userAge = useUserStore(useShallow((state) => state.user.age));
  const updateFirstName = useUserStore((state) => state.updateFirstName);
  const updateAge = useUserStore((state) => state.updateAge);

  const increAge = () => {
    updateAge(userAge + 1);
  };
  const updateName = () =>{
    updateFirstName("New name")
  }
  return (
    <>
      <h1>Product List Page</h1>
      <h1>User Store</h1>
      {/* <p>First name: {userFirstName}</p> */}
      <p>Last name: {userLastName}</p>
      <Button onClick={increAge}>Increment Age</Button>
      <Button onClick={updateName}>Update Name</Button>
    </>
  );
}

export default ProductList;
