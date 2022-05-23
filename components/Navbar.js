import { useState, useEffect } from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link"
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"
import Menu from "./Menu"

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 80) {
        setActive(true)
      } else {
        setActive(false)
      }
    }

    window.addEventListener("scroll", changeBackground)
  }, [])

  return (
    <nav
      className={`fixed w-full top-0 z-30 py-8 xl:px-16 px-8 flex items-center justify-between ${
        active
          ? "bg-white text-black shadow-md"
          : "bg-transparent border-b border-gray-600 text-white"
      }`}
    >
      <div className="flex justify-between lg:w-3/4">
        <Link href="/" passHref>
          <div className="relative cursor-pointer">
            <p className="font-parisienne text-base -mb-2">The</p>
            <p className="font-oswald text-4xl">
              TKB<span className="text-base">ROWN</span>
            </p>
            <p className="font-parisienne text-base ml-8 -mt-1">Company</p>
          </div>
        </Link>

        <div className="lg:flex hidden items-end space-x-20">
          <Link href="/" passHref>
            <span className="cursor-pointer font-semibold hover:text-gray-400">
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span className="cursor-pointer font-semibold hover:text-gray-400">
              About Us
            </span>
          </Link>
          <Link href="/services" passHref>
            <span className="cursor-pointer font-semibold hover:text-gray-400">
              Services
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="cursor-pointer font-semibold hover:text-gray-400">
              Contact Us
            </span>
          </Link>
        </div>
      </div>

      <div className="lg:hidden block relative">
        {showMenu ? (
          <FiX size={24} onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <FiMenu size={24} onClick={() => setShowMenu(!showMenu)} />
        )}
        {showMenu && <Menu />}
      </div>
    </nav>
  )
}

export default Navbar
