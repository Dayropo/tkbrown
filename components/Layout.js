import { useState, useEffect } from "react"
import Footer from "./Footer"
import { FaChevronUp } from "react-icons/fa"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const showButton = () => {
      if (window.scrollY > 300) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }

    window.addEventListener("scroll", showButton)
  }, [])
  return (
    <div className="relative font-poppins cursor-default min-h-screen">
      <Navbar />
      {children}
      <Footer />
      <button
        className={`bottom-4 right-4 w-11 h-11 rounded-full bg-purple-700 items-center justify-center text-white shadow hover:-translate-y-1 transform transition ${
          isActive ? "flex fixed" : "hidden"
        }`}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <FaChevronUp />
      </button>
    </div>
  )
}

export default Layout
