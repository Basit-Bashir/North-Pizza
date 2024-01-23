import Link from "next/link";

export default function Header() {
  return (
    <div className="p-6 mx-auto shadow-md shadow-green-200">
      <div className="flex items-center font-semibold tracking-wider justify-between text-lg">
        <Link href="" className="font-bold uppercase text-2xl">
          North-Pizza
        </Link>
        <nav className="flex text-xl gap-8 items-center">
          <Link
            href=""
            className=" hover:bg-gradient-to-b from-yellow-500 to-orange-500 p-3 transition duration-300 hover:text-white rounded-xl"
          >
            Home
          </Link>
          <Link
            href="/menu"
            className="hover:bg-gradient-to-b from-yellow-500 to-orange-500 p-3 transition- duration-300 hover:text-white rounded-xl"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            passHref
            className="hover:bg-gradient-to-b from-yellow-500 to-orange-500 p-3 transition duration-300 hover:text-white rounded-xl"
          >
            Contact
          </Link>
          <Link
            href="/about"
            className="hover:bg-gradient-to-b from-yellow-500 to-orange-500 p-3 transition duration-300 hover:text-white rounded-xl"
          >
            About
          </Link>
          <Link href="/" className="bg-yellow-400 px-4 py-3 rounded-xl ">
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
}
