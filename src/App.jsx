import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import Products from "./pages/Products";
import Forum from "./pages/Forum";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onSearch={handleSearch} />
        <main className="flex-grow container mx-auto mt-6">
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/products" element={<Products />} />
            <Route path="/forum" element={<Forum />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
