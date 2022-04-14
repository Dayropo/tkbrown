import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-3 px-6 bg-black text-white">
      <span>Copyright 2022</span>
      <div className="flex items-center space-x-4">
        <FaFacebookF />
        <FaTwitter />
        <FaInstagram />
      </div>
    </footer>
  )
}

export default Footer
