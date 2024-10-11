const CardProduct = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <div className="mt-4">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
