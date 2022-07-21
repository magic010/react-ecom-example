import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const ProductPage = ({ products }) => {
  console.log(
    "🚀 ~ file: ProductPage.js ~ line 5 ~ ProductPage ~ products",
    products
  );

  const { id, name } = useParams();
  const location = useLocation();

  const qs = queryString.parse(location.search);
  const product = products.filter((product) => product.id === +id);
  console.log(
    "🚀 ~ file: ProductPage.js ~ line 15 ~ ProductPage ~ product",
    product
  );

  console.log(qs);
  return product[0].name === name && product[0].id === +id ? (
    <h1>{`Name: ${product[0].name} ----- Price is ${product[0].price}`}</h1>
  ) : (
    <h1>Product not found</h1>
  );
};

export default ProductPage;
