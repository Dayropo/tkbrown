import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-between py-16 xl:px-24 px-8 bg-purple-700 text-white">
      <div className="lg:w-1/4 sm:w-1/2 w-full px-4">
        <Link href="/" passHref>
          <p className="lg:text-xl text-lg font-semibold cursor-pointer">
            The TKBrown Company
          </p>
        </Link>
        <p className="mt-8 lg:text-base text-sm">
          A branding and media agency providing customised solutions that help
          brands to lead and succeed in their marketing transformation goals.
        </p>
      </div>

      <div className="lg:w-1/4 sm:w-1/2 w-full px-4 sm:pt-0 pt-10">
        <p className="lg:text-xl text-lg font-semibold">Links</p>
        <div className="mt-8 flex flex-col space-y-6 lg:text-base text-sm">
          <Link href="/about" passHref>
            <p className="cursor-pointer hover:text-gray-400">
              About The TKBrown
            </p>
          </Link>
          <Link href="/services" passHref>
            <p className="cursor-pointer hover:text-gray-400">Our Services</p>
          </Link>
          <Link href="/contact" passHref>
            <p className="cursor-pointer hover:text-gray-400">Contact Us</p>
          </Link>
        </div>
      </div>

      <div className="lg:w-1/4 sm:w-1/2 w-full px-4 lg:pt-0 pt-10">
        <p className="lg:text-xl text-lg font-semibold">Get In Touch!</p>
        <div className="mt-8 flex flex-col space-y-6 lg:text-base text-sm">
          <p>
            Email: <a href="mailto:info@thetkbrown.com">info@thetkbrown.com</a>
          </p>
          {/* <p>
            Telephone: <a href="tel:8177770303">817-777-0303</a>,<br />
            <a href="tel:2243189503">224-318-9503</a>
          </p> */}
        </div>
      </div>

      <div className="lg:w-1/4 sm:w-1/2 w-full px-4">
        <div className="flex items-center">
          <div className="mt-16 pt-10 border-t border-gray-400">
            Copyright &#169; 2022 TKBrown Company. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
