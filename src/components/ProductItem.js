const Product = (props) => {
  console.log(
    "🚀 ~ file: ProductItem.js ~ line 2 ~ Product ~ props",
    props.product
  );
  const { name, price, count, id } = props.product;
  const {
    handleIncrement,
    handleDecrement,
    handleReset,
    handleRemoveFromCart,
  } = props;

  return (
    <div className="row p-2">
      <span className="fw-bold col-3">{name}</span>
      <span className="col-2">{price} $</span>
      <div
        onClick={() => props.handleIncrement(name)}
        className="btn btn-primary col-1"
      >
        +
      </div>
      <span className="col-1 d-flex justify-content-center align-items-center">
        {count}
      </span>
      <div
        onClick={() => props.handleDecrement(name)}
        className="btn btn-primary col-1"
      >
        -
      </div>
      <div
        className="btn btn-danger btn-sm col-1 mx-2"
        onClick={() => props.handleRemoveFromCart(id)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </div>
    </div>
  );
};

export default Product;
