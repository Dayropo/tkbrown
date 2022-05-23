import Link from "next/link"

const Menu = () => {
  return (
    <div className="origin-top-right absolute top-0 right-0 mt-12 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
      <div className="flex flex-col py-4 text-gray-500">
        <Link href="/" passHref>
          <span className="hover:bg-purple-100 hover:text-gray-800 py-2 px-4">
            Home
          </span>
        </Link>
        <Link href="/about" passHref>
          <span className="hover:bg-purple-100 hover:text-gray-800 py-2 px-4">
            About Us
          </span>
        </Link>
        <Link href="/services" passHref>
          <span className="hover:bg-purple-100 hover:text-gray-800 py-2 px-4">
            Services
          </span>
        </Link>
        <Link href="/contact" passHref>
          <span className="hover:bg-purple-100 hover:text-gray-800 py-2 px-4">
            Contact Us
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Menu
