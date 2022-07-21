import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";
import About from "./pages/About";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import AboutTeam from "./pages/AboutTeam";
import AboutCompany from "./pages/AboutCompany";
import Menu from "./pages/Menu";
import { useState } from "react";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Big Burger",
      price: 50,
      count: 0,
      isInCart: false,
      category: 1,
    },
    {
      id: 2,
      name: "Mideium Burger",
      price: 40,
      count: 0,
      isInCart: false,
      category: 1,
    },
    {
      id: 3,
      name: "Small Burger",
      price: 30,
      count: 0,
      isInCart: false,
      category: 1,
    },
    {
      id: 4,
      name: "Big Fries",
      price: 25,
      count: 0,
      isInCart: false,
      category: 2,
    },
    {
      id: 5,
      name: "Mideium Fries",
      price: 20,
      count: 0,
      isInCart: false,
      category: 2,
    },
    {
      id: 6,
      name: "Small Fries",
      price: 15,
      count: 0,
      isInCart: false,
      category: 2,
    },
    {
      id: 7,
      name: "Big Cola",
      price: 15,
      count: 0,
      isInCart: false,
      category: 3,
    },
    {
      id: 8,
      name: "Mideium Cola",
      price: 10,
      count: 0,
      isInCart: false,
      category: 3,
    },
    {
      id: 9,
      name: "Small Cola",
      price: 7,
      count: 0,
      isInCart: false,
      category: 3,
    },
  ]);

  const categories = [
    { id: 0, name: "All" },
    { id: 1, name: "Burger" },
    { id: 2, name: "Fries" },
    { id: 3, name: "Cola" },
  ];

  //   Handlers
  const handleIncrement = (productName) => {
    // clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((item) => item.name === productName);
    newProducts[index].count = newProducts[index].count + 1;
    // setState
    setProducts(newProducts);
  };

  const handleDecrement = (productName) => {
    // clone
    const newProducts = [...products];
    // update
    const index = newProducts.findIndex((p) => p.name === productName);
    if (newProducts[index].count > 0)
      newProducts[index].count = newProducts[index].count - 1;
    // setState
    setProducts(newProducts);
  };

  const handleReset = () => {
    // clone
    let newProducts = [...products];
    // update
    newProducts = newProducts.map((p) => {
      return { ...p, count: 0 };
    });
    // setState
    setProducts(newProducts);
  };

  const hadleAddToCart = (productId) => {
    // clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].isInCart = !newProducts[index].isInCart;
    newProducts[index].count = 1;
    // setState
    setProducts(newProducts);
  };

  const handleRemoveFromCart = (productId) => {
    // clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].isInCart = !newProducts[index].isInCart;
    newProducts[index].count = 0;
    // setState
    setProducts(newProducts);
  };

  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Cart
                  products={products}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  handleReset={handleReset}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              }
            />
            <Route
              path="/menu"
              element={
                <Menu
                  products={products}
                  hadleAddToCart={hadleAddToCart}
                  categories={categories}
                />
              }
            />
            <Route path="/about" element={<About />}>
              <Route path="team" element={<AboutTeam />} />
              <Route path="company" element={<AboutCompany />} />
            </Route>
            <Route
              path="/product/:name/:id"
              element={<ProductPage products={products} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
