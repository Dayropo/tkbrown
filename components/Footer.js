import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex justify-between py-16 px-24 bg-purple-700 text-white">
      <div className="w-1/4 px-4">
        <Link href="/" passHref>
          <p className="text-xl font-semibold cursor-pointer">
            The TKBrown Company
          </p>
        </Link>
        <p className="mt-8">
          A leading media sales and advertising agency that provides end-to-end
          marketing services.
        </p>
      </div>

      <div className="w-1/4 px-4">
        <p className="text-xl font-semibold">Links</p>
        <div className="mt-8 flex flex-col space-y-6">
          <Link href="/about" passHref>
            <p className="cursor-pointer hover:text-gray-400">About The TKB</p>
          </Link>
          <Link href="/services" passHref>
            <p className="cursor-pointer hover:text-gray-400">Our Services</p>
          </Link>
          <Link href="/contact" passHref>
            <p className="cursor-pointer hover:text-gray-400">Contact Us</p>
          </Link>
        </div>
      </div>

      <div className="w-1/4 px-4">
        <p className="text-xl font-semibold">Get In Touch!</p>
        <div className="mt-8 flex flex-col space-y-6">
          <p>
            Email: <a href="mailto:info@thetkbrown.com">info@thetkbrown.com</a>
          </p>
          <p>
            Telephone: <a href="tel:8177770303">817-777-0303</a>,<br />
            <a href="tel:2243189503">224-318-9503</a>
          </p>
        </div>
      </div>

      <div className="w-1/4 px-4">
        <div className="flex items-center">
          <div className="mt-16 py-10 border-t border-gray-400">
            Copyright &#169; 2022 TKBrown Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
