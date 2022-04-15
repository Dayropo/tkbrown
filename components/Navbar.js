import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link"

const Navbar = ({ page }) => {
  return (
    <div className="flex border-b border-gravy justify-between py-10 px-10 font-poppins text-white relative">
      <Link href="/" passHref>
        <span className="hover:text-gravy cursor-pointer font-playfair">
          TK Brown
        </span>
      </Link>

      <div className="flex items-center space-x-8 text-xs font-semibold">
        <Link href="/" passHref>
          <span className="hover:text-gravy cursor-pointer">HOME</span>
        </Link>
        <Link href="/about">
          {page === "about" ? (
            <span className="text-gravy cursor-pointer">ABOUT</span>
          ) : (
            <span className="hover:text-gravy cursor-pointer">ABOUT</span>
          )}
        </Link>
        <Link href="/services">
          {page === "services" ? (
            <span className="text-gravy cursor-pointer">SERVICES</span>
          ) : (
            <span className="hover:text-gravy cursor-pointer">SERVICES</span>
          )}
        </Link>
        <Link href="/portfolio">
          {page === "portfolio" ? (
            <span className="text-gravy cursor-pointer">PORTFOLIO</span>
          ) : (
            <span className="hover:text-gravy cursor-pointer">PORTFOLIO</span>
          )}
        </Link>
        <Link href="/contact">
          {page === "contact" ? (
            <span className="text-gravy cursor-pointer">CONTACT</span>
          ) : (
            <span className="hover:text-gravy cursor-pointer">CONTACT</span>
          )}
        </Link>
      </div>

      <div className="flex items-center space-x-6 w-1/12 relative before:absolute before:bg-gravy before:w-[1px] before:h-[105px] before:-left-8">
        <FaFacebookF className="hover:text-gravy cursor-pointer" />
        <FaTwitter className="hover:text-gravy cursor-pointer" />
        <FaInstagram className="hover:text-gravy cursor-pointer" />
      </div>
    </div>
  )
}

export default Navbar
