const CardArticle = ({ article }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={article.thumbnail}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{article.title}</h2>
        <p className="text-gray-700">{article.summary}</p>
      </div>
    </div>
  );
};

export default CardArticle;
