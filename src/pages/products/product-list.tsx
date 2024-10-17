import { ProductService } from '@service/axios';
import { useEffect } from 'react';

function ProductList() {
  // useEffect(() => {
  //   ProductService.getList().then((result) => {
  //     console.log(result.data);
  //   });
  // }, []);
  return <div>Product List Page</div>;
}

export default ProductList;
