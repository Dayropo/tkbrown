import { useState } from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link"
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi"

const Navbar = ({ page, setOpenModal }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="lg:block hidden">
        {page === "home" ? (
          <div className="flex items-center justify-between py-10 px-10">
            <Link href="/" passHref>
              <div className="text-3xl cursor-pointer font-playfair">
                TK Brown
              </div>
            </Link>

            <div>
              <FiMenu
                size={24}
                onClick={() => setOpenModal(true)}
                className="cursor-pointer"
              />
            </div>
          </div>
        ) : (
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
                  <span className="hover:text-gravy cursor-pointer">
                    SERVICES
                  </span>
                )}
              </Link>
              <Link href="/portfolio">
                {page === "portfolio" ? (
                  <span className="text-gravy cursor-pointer">PORTFOLIO</span>
                ) : (
                  <span className="hover:text-gravy cursor-pointer">
                    PORTFOLIO
                  </span>
                )}
              </Link>
              <Link href="/contact">
                {page === "contact" ? (
                  <span className="text-gravy cursor-pointer">CONTACT</span>
                ) : (
                  <span className="hover:text-gravy cursor-pointer">
                    CONTACT
                  </span>
                )}
              </Link>
            </div>

            <div className="flex items-center space-x-6 w-1/12 relative before:absolute before:bg-gravy before:w-[1px] before:h-[105px] before:-left-8">
              <FaFacebookF className="hover:text-gravy cursor-pointer" />
              <FaTwitter className="hover:text-gravy cursor-pointer" />
              <FaInstagram className="hover:text-gravy cursor-pointer" />
            </div>
          </div>
        )}
      </div>

      <div className="lg:hidden block relative">
        <div className="py-10 px-10 flex justify-end items-center">
          {isOpen ? (
            <FiX
              size={24}
              color={page === "home" ? "black" : "white"}
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <FiMenu
              size={24}
              color={page === "home" ? "black" : "white"}
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>

        {isOpen && (
          <div className="bg-mobile font-poppins text-white text-xs font-semibold w-full py-8 px-8 flex flex-col space-y-4">
            <Link href="/" passHref>
              <div className="hover:text-gravy cursor-pointer flex items-center justify-between">
                <span>HOME</span>
                <FiChevronDown size={18} />
              </div>
            </Link>
            <Link href="/about">
              {page === "about" ? (
                <div className="text-gravy cursor-pointer flex items-center justify-between">
                  <span>ABOUT</span>
                  <FiChevronDown size={18} />
                </div>
              ) : (
                <div className="hover:text-gravy cursor-pointer flex items-center justify-between">
                  <span>ABOUT</span>
                  <FiChevronDown size={18} />
                </div>
              )}
            </Link>
            <Link href="/services">
              {page === "services" ? (
                <div className="text-gravy cursor-pointer flex items-center justify-between">
                  <span>SERVICES</span>
                  <FiChevronDown size={18} />
                </div>
              ) : (
                <div className="hover:text-gravy cursor-pointer flex items-center justify-between">
                  <span>SERVICES</span>
                  <FiChevronDown size={18} />
                </div>
              )}
            </Link>
            <Link href="/portfolio">
              {page === "portfolio" ? (
                <div className="text-gravy cursor-pointer flex items-center justify-between">
                  <span>PORTFOLIO</span>
                  <FiChevronDown size={18} />
                </div>
              ) : (
                <div className="hover:text-gravy cursor-pointer flex items-center justify-between">
                  <span>PORTFOLIO</span>
                  <FiChevronDown size={18} />
                </div>
              )}
            </Link>
            <Link href="/contact">
              {page === "contact" ? (
                <div className="text-gravy cursor-pointer flex items-center justify-between">
                  <span>CONTACT</span>
                  <FiChevronDown size={18} />
                </div>
              ) : (
                <div className="hover:text-gravy cursor-pointer flex items-center justify-between">
                  <span>CONTACT</span>
                  <FiChevronDown size={18} />
                </div>
              )}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
