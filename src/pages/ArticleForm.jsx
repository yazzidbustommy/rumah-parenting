import { useState } from "react";

const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = { title, summary, content };
    console.log("Article submitted:", newArticle);
    // Simpan artikel ke database atau API
    setTitle("");
    setSummary("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Add New Article</h2>
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <textarea
        className="w-full p-2 border rounded"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Article
      </button>
    </form>
  );
};
export default ArticleForm;
