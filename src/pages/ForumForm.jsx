import { useState } from "react";

export default function ForumForm() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForum = { title, posts: parseInt(posts) };
    console.log("Forum topic submitted:", newForum);
    // Simpan forum ke database atau API
    setTitle("");
    setPosts("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Add New Forum Discussion</h2>
      <input
        type="text"
        className="w-full p-2 border rounded"
        placeholder="Discussion Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        className="w-full p-2 border rounded"
        placeholder="Initial Number of Posts"
        value={posts}
        onChange={(e) => setPosts(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit Discussion
      </button>
    </form>
  );
}
