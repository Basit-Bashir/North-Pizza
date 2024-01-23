const Footer = () => {
  return (
    <footer className="tracking-widest bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-3xl font-bold">North-Pizza</h3>
          <p className="text-sm">Delivering Happiness, One Slice at a Time</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="text-lg hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-lg hover:underline">
            Terms of Service
          </a>
          <a href="#" className="text-lg hover:underline">
            Careers
          </a>
          <a href="#" className="text-lg hover:underline">
            Contact Us
          </a>
        </div>
        <div>
          <p className="text-lg">
            &copy; {new Date().getFullYear()} North-Pizza. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
