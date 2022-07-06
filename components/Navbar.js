import { useState, useEffect } from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link"
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"
import Menu from "./Menu"
import { useRouter } from "next/router"
import Image from "next/image"
import LogoWhite from "../public/white_logo_transparent_background.png"
import LogoPurple from "../public/logo_transparent_background.png"

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

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

  useEffect(() => {
    setShowMenu(false)
  }, [router.pathname])

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
          <div className="relative flex w-32 h-20 cursor-pointer">
            {active ? (
              <Image
                src={LogoPurple}
                alt="dark logo"
                objectFit="contain"
                layout="fill"
              />
            ) : (
              <Image
                src={LogoWhite}
                alt="white logo"
                objectFit="contain"
                layout="fill"
              />
            )}
          </div>
        </Link>

        <div className="lg:flex hidden items-center space-x-20">
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

      <div className="lg:flex hidden items-end">
        <a href="https://portal.thetkbrown.com" target="_blank">
          <button
            className={`${
              active
                ? "border-2 border-purple-700 py-2.5 px-8 text-purple-700 hover:bg-purple-700 hover:text-white  rounded-full"
                : "border-2 border-white text-white rounded-full py-2.5 px-8 hover:bg-white hover:text-purple-700"
            } `}
          >
            Sign In
          </button>
        </a>
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
