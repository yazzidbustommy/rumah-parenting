import { useState } from "react";

export default function AboutUsForm() {
  const [aboutText, setAboutText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("About Us submitted:", aboutText);
    // Simpan About Us ke database atau API
    setAboutText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Edit About Us</h2>
      <textarea
        className="w-full p-2 border rounded"
        placeholder="About Us Content"
        value={aboutText}
        onChange={(e) => setAboutText(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save About Us
      </button>
    </form>
  );
}
