const reviews = [
  {
    id: 1,
    author: "Basit",
    comment:
      "The best pizza I have ever tasted! Amazing flavors and quick delivery.",
    date: "January 15, 2023",
  },
  {
    id: 2,
    author: "Zahid",
    comment:
      "Great service and a wonderful variety of pizzas. I highly recommend this place!",
    date: "February 2, 2023",
  },
  {
    id: 3,
    author: "Rabia",
    comment:
      "The best pizza I have ever tasted! Amazing flavors and quick delivery.",
    date: "January 25, 2023",
  },
];

export default function ReviewsSection() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-yellow-400 tracking-widest">
          Customer Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md tracking-widest"
            >
              <p className="text-gray-600 text-xl mb-8">{review.comment}</p>
              <div className="flex flex-col gap-8 items-center justify-between">
                <p className="text-gray-700">{review.author}</p>
                <p className="text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
