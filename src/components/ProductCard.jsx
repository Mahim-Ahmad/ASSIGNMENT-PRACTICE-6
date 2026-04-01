import { toast } from "react-toastify";


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

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">

      
      <div className="flex items-center justify-between mb-4">
        <img
          src={iconMap[product.icon]}
          className="w-10 h-10"
        />

        <span
          className={`text-xs px-3 py-1 rounded-full font-medium mb-15
          ${product.tagType === "best-seller" && "bg-orange-100 text-orange-600"}
          ${product.tagType === "new" && "bg-green-100 text-green-600"}
          ${product.tagType === "popular" && "bg-violet-100 text-violet-600"}
        `}
        >
          {product.tag}
        </span>
      </div>

      
      <h3 className="text-lg font-bold text-gray-900 mb-1">
        {product.name}
      </h3>

      
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">
        {product.description}
      </p>

      
      <div className="mb-4">
        <span className="text-3xl font-extrabold text-gray-900">
          ${product.price}
        </span>
        <span className="text-sm text-gray-400 ml-1">
          /{product.period}
        </span>
      </div>

     
      <ul className="mb-6 space-y-2">
        {product.features.map((f, i) => (
          <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
            <span className="text-violet-600 font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>

      
      <button
        onClick={() => {
          onAddToCart(product);
          toast.success("Added to cart!");
        }}
        disabled={isInCart}
        className={`w-full py-2 rounded-full font-semibold transition-all duration-300
        ${
          isInCart
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-violet-600 text-white hover:bg-violet-700"
        }`}
      >
        {isInCart ? "Added" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;