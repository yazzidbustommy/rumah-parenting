import React from "react";
import products from "../data/products";
const Products = () => {
  return (
    <div>
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">
          Recommended Products
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
