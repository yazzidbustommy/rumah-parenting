import { useState, useEffect } from "react";
import CardArticle from "../components/CardArticle";
import CardProduct from "../components/CardProduct";
import articlesData from "../data/articles";
import productsData from "../data/products";

const Home = ({ searchTerm }) => {
  const [filteredArticles, setFilteredArticles] = useState(articlesData);

  useEffect(() => {
    if (searchTerm) {
      const results = articlesData.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(results);
    } else {
      setFilteredArticles(articlesData);
    }
  }, [searchTerm]);

  return (
    <div className="container mx-auto mt-6">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-center mb-4">
          Selamat Datang di Rumah Parenting
        </h1>
        <p className="text-center text-gray-700">
          Sumber daya lengkap untuk orang tua baru, dari kesehatan bayi hingga
          produk terbaik.
        </p>
      </section>

      {/* Bagian Artikel */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Artikel Terbaru</h2>
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <CardArticle key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No articles found.</p>
        )}
      </section>

      {/* Bagian Produk */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Rekomendasi Produk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
