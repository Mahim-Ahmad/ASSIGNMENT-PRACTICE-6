import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Products = ({ cartItems, onAddToCart, onRemove, onCheckout }) => {
  const [tab, setTab] = useState("products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <section className="bg-gray-50 py-16">

      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-900">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 pt-4">
          Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
        </p>
      </div>


      <div className="flex justify-center mb-10">
        <div className="bg-white border rounded-full p-1 flex gap-1 shadow-sm">

          <button
            onClick={() => setTab("products")}
            className={`px-6 py-2 rounded-full ${
              tab === "products"
                ? "bg-violet-600 text-white"
                : "text-gray-600"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setTab("cart")}
            className={`px-6 py-2 rounded-full ${
              tab === "cart"
                ? "bg-violet-600 text-white"
                : "text-gray-600"
            }`}
          >
            Cart ({cartItems.length})
          </button>

        </div>
      </div>

      {tab === "products" ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              isInCart={isInCart(product.id)}
            />
          ))}
        </div>
      ) : (
        <Cart
          cartItems={cartItems}
          onRemove={onRemove}
          onCheckout={onCheckout}
        />
      )}
    </section>
  );
};

export default Products;