import React from "react";
import articles from "../data/articles";

const Articles = () => {
  return (
    <div>
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Articles</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
              <p>{article.summary}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Articles;
