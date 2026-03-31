const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-20 ">

        <div>
          <h2 className="text-white text-xl font-bold mb-3 ">
            DigiTools
          </h2>
          <p className="text-sm">
            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-20 mr-6  ">
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Template</li>
              <li>Integrations</li>

            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <h4 className="text-white font-semibold mb-3">Social Links</h4>
          <div className="gap-8 flex text-2xl">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

      </div>


      <hr className="mt-12 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4" />


      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center mt-6 gap-4">

        <p className="text-center text-xs md:text-left  ">
          © 2026 Digitools. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a href="" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="" className="hover:text-white">
            Terms of Service
          </a>
          <a href="" className="hover:text-white">
            Cookies
          </a>
        </div>

      </div>



    </footer>
  );
};

export default Footer;