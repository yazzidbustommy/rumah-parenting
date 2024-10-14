import { useState } from "react";
import ArticleForm from "./ArticleForm";
import ProductForm from "./ProductForm";
import ForumForm from "./ForumForm";
import AboutUsForm from "./AboutUsForm";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("articles"); // Default tab "articles"

  const renderTabContent = () => {
    switch (activeTab) {
      case "articles":
        return <ArticleForm />;
      case "products":
        return <ProductForm />;
      case "forum":
        return <ForumForm />;
      case "about":
        return <AboutUsForm />;
      default:
        return <ArticleForm />;
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>

      {/* Navbar Admin */}
      <nav className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "articles" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("articles")}
        >
          Articles
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "products" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "forum" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("forum")}
        >
          Forum
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "about" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("about")}
        >
          About Us
        </button>
      </nav>

      {/* Konten dari tab yang dipilih */}
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default AdminPanel;
