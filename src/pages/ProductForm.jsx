import { useState } from "react";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description };
    console.log("Product submitted:", newProduct);
    // Simpan produk ke database atau API
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Add New Product</h2>
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Product
      </button>
    </form>
  );
}
