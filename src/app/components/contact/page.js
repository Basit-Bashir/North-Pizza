// ./src/app/components/Contact.js

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted!");
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-yellow-400 tracking-widest">
          Contact Us
        </h2>
        <div className="max-w-xl mx-auto bg-white p-8 rounded-md shadow-md">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-600"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-gray-900 flex items-center justify-center mx-auto px-6 py-4 rounded-full font-bold text-xl tracking-widest hover:bg-yellow-300 transition duration-300 "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
