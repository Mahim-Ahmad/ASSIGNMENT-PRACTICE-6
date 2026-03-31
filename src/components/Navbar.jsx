import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow sticky top-0 z-50">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">

        
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <h1 className="font-bold text-violet-600 text-xl whitespace-nowrap">
          DigiTools
        </h1>

      
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">

         
          <div className="relative shrink-0">
            <ShoppingCart size={22} />
            
          </div>

          
          <div className="hidden md:flex items-center gap-3">
            <button className="whitespace-nowrap">Login</button>

            <button className="bg-violet-600 text-white px-4 py-2 rounded-full whitespace-nowrap">
              Get Started
            </button>
          </div>
        </div>

        
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6">
          <a href="#products" className="hover:text-violet-600">
            Products
          </a>
          <a href="#features" className="hover:text-violet-600">
            Features
          </a>
          <a href="#pricing" className="hover:text-violet-600">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-violet-600">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-violet-600">
            FAQ
          </a>
        </div>
      </div>

      
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow transition-all duration-300 overflow-hidden ${
          open ? "max-h-72 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-3 px-4">
          <a href="#products">Products</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>

          <button className="text-left">Login</button>

          <button className="bg-violet-600 text-white px-4 py-2 rounded-full w-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;