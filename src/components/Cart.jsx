import { toast } from "react-toastify";
import { ShoppingCart } from "lucide-react";


import writingIcon from "../assets/products/writing_2327400 1.png";
import designIcon from "../assets/products/design-tool.png";
import portfolioIcon from "../assets/products/portfolio.png";
import operationIcon from "../assets/products/operation.png";
import socialIcon from "../assets/products/social-media.png";
import cartIcon from "../assets/products/shopping-cart.png";


const iconMap = {
  writing: writingIcon,
  "design-tool": designIcon,
  portfolio: portfolioIcon,
  operation: operationIcon,
  "social-media": socialIcon,
  "shopping-cart": cartIcon,
};

const Cart = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">

      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-gray-400 text-center py-10 flex flex-col items-center justify-center gap-4">
          <ShoppingCart size={50} className="text-gray-400" />
          <span className="text-lg font-medium">Your cart is empty</span>
        </div>
      ) : (
        <>
        
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-xl"
              >
                
                <div className="flex items-center gap-4">

                  <img
                    src={iconMap[item.icon]}
                    className="w-10 h-10 p-1  "
                    alt={item.name}
                  />

                  <div>
                    <p className="font-medium text-gray-800">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                </div>

               
                <button
                  onClick={() => {
                    onRemove(item.id);
                    toast.error("Removed");
                  }}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          
          <div className="flex items-center justify-between bg-green-200 px-5 py-4 rounded-xl mt-5 text-blue-800 font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => {
              onCheckout();
              toast.success("Checkout done!");
            }}
            className="hover:text-white font-medium flex items-center justify-center w-full mt-5 bg-blue-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition duration-300"
          >
            Proceed To Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;