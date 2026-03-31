import heroImg from "../assets/products/banner.png";
import { Play } from "lucide-react";
import { Podcast } from 'lucide-react';

const Banner = () => {
  return (
    <section className="bg-white py-12 px-4">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

   
    <div className="flex-1 text-center lg:text-left">
      <div className="bg-violet-100 text-violet-600 text-xs sm:text-sm px-4 py-1 rounded-full inline-block mb-5">
        <span className="flex  items-center gap-2 p-1 mb-0.5">
          <Podcast />
          New: AI-Powered Tools Available
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
        Supercharge Your <span className="text-violet-600">Digital Workflow</span>
      </h1>

      <p className="text-gray-500 mb-6 text-sm sm:text-base">
        Access premium AI tools, templates, and productivity software.Is your workflow feeling a bit sluggish? Our premium digital tools are here to give it the boost it needs.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="bg-violet-600 text-white px-6 py-3 rounded-full hover:bg-violet-950 ">
          Explore Products
        </button>

        <button className="flex items-center justify-center gap-2 border px-6 py-3 rounded-full hover:bg-violet-700">
          <Play size={16}/> Watch Demo
        </button>
      </div>
    </div>

    
    <div className="flex-1">
      <img
        src={heroImg}
        className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
      />
    </div>

  </div>
</section>
  );
};

export default Banner;