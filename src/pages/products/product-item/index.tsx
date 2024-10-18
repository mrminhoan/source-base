interface IProps {
  title: string;
  price: number;
  quantity: number;
}

function ProductItem(props: IProps) {
  const { title, price, quantity } = props;
  return (
    <div className="mt-4">
      <p>{title}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default ProductItem;
