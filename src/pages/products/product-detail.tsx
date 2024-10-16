import { useLocation } from "react-router-dom";

function ProductDetail() {
  const {hash, key, pathname, search, state} = useLocation();
  console.log({hash, key,pathname, search, state})
  return <div>Product Detail Page</div>;
}

export default ProductDetail;
