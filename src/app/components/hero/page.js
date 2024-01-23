import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="bg-gray-100 h-screen flex items-center justify-center mt-1">
        <div className="container mx-auto flex items-center">
          <div className="md:w-1/2 text-center md:text-left tracking-widest ">
            <h1 className="text-4xl font-bold mb-4 leading-[4rem]">
              Delicious Pizza
              <br /> Delivered to Your{" "}
              <span className="font-extrabold text-yellow-400 bg-black px-8 rounded-full shadow-md">
                Doorstep
              </span>
            </h1>
            <p className="text-xl mb-6 mt-8 font-semibold">
              Order now and experience the best pizza in town!
            </p>
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition duration-300 tracking-widest uppercase">
              Order Now
            </button>
          </div>
          <div className="md:w-1/2 hidden md:block ml-6 clip-border">
            <Image
              src="https://unsplash.com/photos/QbOvrpDU1KA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTV8fHBpenphJTIwcmVzdGF1cmFudHxlbnwwfHx8fDE3MDYwMTEzNzB8MA&force=true&w=2400"
              alt="Delicious Pizza"
              objectFit="cover"
              width={1200}
              height={400}
              className="rounded"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
