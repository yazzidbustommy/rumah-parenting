import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Menggunakan ikon dari react-icons

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk toggle menu
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm(""); // Kosongkan input setelah search
      setIsMenuOpen(false); // Tutup menu setelah pencarian
      navigate("/");
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Rumah Parenting</h1>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links untuk desktop */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/articles" className="text-white">
              Articles
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white">
              Products
            </Link>
          </li>
          <li>
            <Link to="/forum" className="text-white">
              Forum
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white">
              About Us
            </Link>
          </li>
        </ul>

        {/* Search bar untuk desktop */}
        <form onSubmit={handleSearchSubmit} className="hidden md:flex ml-4">
          <input
            type="text"
            className="px-4 py-2 rounded-l-lg"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-gray-300 px-4 py-2 rounded-r-lg">
            Search
          </button>
        </form>
      </div>

      {/* Dropdown Menu untuk mobile dengan animasi */}
      <div
        className={`md:hidden transition-all duration-1000 ease-in-out transform ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="bg-blue-500 space-y-4 p-4 text-center">
          <li>
            <Link to="/" className="text-white" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/articles" className="text-white" onClick={toggleMenu}>
              Articles
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white" onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/forum" className="text-white" onClick={toggleMenu}>
              Forum
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
        </ul>

        {/* Search bar untuk mobile */}
        <form onSubmit={handleSearchSubmit} className="p-4 flex justify-center">
          <input
            type="text"
            className="px-4 py-2 rounded-l-lg w-3/4"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-gray-300 px-4 py-2 rounded-r-lg">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
