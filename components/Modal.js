import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import { FiX } from "react-icons/fi"
import Link from "next/link"

const Modal = ({ setOpenModal }) => {
  return (
    <div className="bg-modal text-white absolute z-10 h-screen w-full flex flex-col items-center justify-center space-y-6">
      <div className="absolute top-12 right-10">
        <FiX
          size={24}
          onClick={() => setOpenModal(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col space-y-2 text-center text-2xl font-semibold">
        <Link href="/" passHref>
          <span className="hover:text-gravy cursor-pointer">Home</span>
        </Link>
        <Link href="/about" passHref>
          <span className="hover:text-gravy cursor-pointer">About</span>
        </Link>
        <Link href="/services" passHref>
          <span className="hover:text-gravy cursor-pointer">Services</span>
        </Link>
        <Link href="/portfolio" passHref>
          <span className="hover:text-gravy cursor-pointer">Portfolio</span>
        </Link>
        <Link href="/contact" passHref>
          <span className="hover:text-gravy cursor-pointer">Contact</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <FaFacebookF className="hover:text-gravy cursor-pointer" />
        <FaTwitter className="hover:text-gravy cursor-pointer" />
        <FaInstagram className="hover:text-gravy cursor-pointer" />
      </div>
    </div>
  )
}

export default Modal
