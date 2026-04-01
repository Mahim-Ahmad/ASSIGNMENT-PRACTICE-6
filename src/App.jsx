import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar cartCount={cartItems.length} />
      <Banner />
      <Stats />

      <Products
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />

      <Steps />
      <Pricing />
      <CTA />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;