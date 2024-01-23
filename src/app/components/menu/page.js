export default function Menu() {
  const menuItems = [
    {
      name: "Margherita",
      description: "Classic tomato, fresh mozzarella, basil, olive oil",
      price: "$9.99",
      image:
        "https://unsplash.com/photos/MqT0asuoIcU/download?force=true&w=2400",
    },
    {
      name: "Pepperoni",
      description: "Tomato sauce, pepperoni, mozzarella, oregano",
      price: "$12.99",
      image:
        "https://unsplash.com/photos/SU1LFoeEUkk/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bWFnaGVycmF0aSUyMHBpenphfGVufDB8fHx8MTcwNjAxMTkwM3ww&force=true&w=2400",
    },
    {
      name: "Cheese",
      description: "Tomato sauce, Cheese, mozzarella, oregano",
      price: "$10.99",
      image:
        "https://unsplash.com/photos/MQUqbmszGGM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTl8fHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3MDYwMTEzNzB8MA&force=true&w=2400",
    },
    {
      name: "Baked Pizza",
      description: "Tomato sauce, Cheese, mozzarella, Baked",
      price: "$15.99",
      image: "https://unsplash.com/photos/NzHRSLhc6Cs/download?force=true",
    },
    {
      name: "Giant Slice Pizza",
      description: "Tomato sauce, Cheese, pepsi,egg, Baked",
      price: "$7.99",
      image:
        "https://images.pexels.com/photos/845808/pexels-photo-845808.jpeg?cs=srgb&dl=pexels-pablo-macedo-845808.jpg&fm=jpg&w=1819&h=2747&_gl=1*12wx4kw*_ga*NDMzNzA1ODEyLjE3MDYwMTMzMzI.*_ga_8JE65Q40S6*MTcwNjAxMzMzMi4xLjEuMTcwNjAxMzQ2Ny4wLjAuMA..",
    },
    {
      name: "Sweet Corn Pizza",
      description: "Sweet Corn, Cheese, Baked",
      price: "$5.99",
      image:
        "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?cs=srgb&dl=pexels-cats-coming-367915.jpg&fm=jpg&w=7360&h=4140&_gl=1*ueuo4d*_ga*NDMzNzA1ODEyLjE3MDYwMTMzMzI.*_ga_8JE65Q40S6*MTcwNjAxMzMzMi4xLjEuMTcwNjAxMzU1OC4wLjAuMA..",
    },
  ];

  return (
    <div className="container mx-auto mt-16">
      <h2 className="text-5xl text-center font-extrabold mb-16 text-yellow-400 ">
        Our Delicious Pizzas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-80 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <p className="text-lg font-bold text-yellow-600 mb-4">
              {item.price}
            </p>
            <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-400 transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
