const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Left - Logo or Name */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-red-500">MS Creations</h2>
          <p className="text-sm">Crafting creativity through every design.</p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-red-400 transition">About</a></li>
            <li><a href="/contact" className="hover:text-red-400 transition">Contact</a></li>
            <li><a href="/feedback" className="hover:text-red-400 transition">Feedback</a></li>
          </ul>
        </div>

        {/* Right - Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.facebook.com/profile.php?id=61577742677554" className="hover:text-red-400 transition">Facebook</a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm mt-8 text-gray-400">
        © {new Date().getFullYear()} MS Creations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
