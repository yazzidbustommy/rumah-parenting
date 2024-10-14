import React from "react";

const Forum = () => {
  const discussions = [
    { id: 1, title: "How to handle toddler tantrums?", posts: 5 },
    { id: 2, title: "Best bedtime routines for babies", posts: 3 },
    { id: 3, title: "Managing screen time for kids", posts: 8 },
    // Tambahkan lebih banyak diskusi di sini
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Forum Discussions</h2>
      <div className="container mx-auto">
        {discussions.map((discussion) => (
          <div
            key={discussion.id}
            className="bg-white shadow-md p-6 rounded-lg mb-4"
          >
            <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
            <p>{discussion.posts} posts</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forum;
