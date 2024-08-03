const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 ">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <span className="text-2xl font-bold">Luxury Store</span>
        </div>
        <div className="space-x-4 mb-4">
          <a href="#" className="hover:text-gray-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-400">
            Support
          </a>
        </div>
        <p className="text-gray-400">
          &copy; 2024 Luxury Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
