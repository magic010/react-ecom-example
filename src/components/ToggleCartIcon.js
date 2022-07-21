const ToggleCartIcon = ({ isInCart }) => {
  return (
    <>
      {isInCart ? (
        <i className="fa-solid fa-cart-shopping"></i>
      ) : (
        <i
          style={{ color: "gray", opacity: "0.5" }}
          className="fa-solid fa-cart-shopping"
        ></i>
      )}
    </>
  );
};

export default ToggleCartIcon;
