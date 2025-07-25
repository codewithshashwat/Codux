import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";


const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-indigo-600">
          <FaCode className="text-indigo-500" />
          Codux
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link
            to="/"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/submit"
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            Submit
          </Link>
          {/* Future: <Link to="/login">Login</Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
