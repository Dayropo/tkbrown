import Head from "next/head"
import { FiChevronDown } from "react-icons/fi"
import { MdEmail, MdPhone } from "react-icons/md"

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Services | TKBrown</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header className="relative h-screen bg-purple-900">
        {/**jumbo */}
        <div className="px-8 py-40 h-full font-bold text-white text-center flex items-center justify-center font-oswald">
          <span className="xl:text-9xl md:text-7xl text-3xl font-semibold">
            CONTACT US
          </span>
        </div>

        {/**down button */}
        <div className="absolute bottom-6 left-1/2 text-white">
          <FiChevronDown
            size={24}
            onClick={() => {
              const height = document.documentElement.clientHeight - 125
              window.scrollTo({
                top: height,
                left: 0,
                behavior: "smooth",
              })
            }}
            className="cursor-pointer hover:-translate-y-1 transform transition"
          />
        </div>
      </header>

      <div className="py-24 xl:px-32 md:px-16 px-8 flex justify-center">
        {/**email */}
        <div className="xl:w-1/3 md:w-1/2 w-full px-4">
          <div className="py-16 rounded-xl border border-gray-50 shadow-outline shadow-gray-200 flex flex-col items-center justify-center space-y-8">
            <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-outline shadow-gray-200 hover:shadow-purple-400 hover:-translate-y-1 transform transition text-purple-600">
              <MdEmail size={32} />
            </div>
            <p className="text-xl font-semibold">Email Address</p>
            <a
              href="mailto:info@thetkbrown.com"
              className="text-sm cursor-pointer"
            >
              info@thetkbrown.com
            </a>
          </div>
        </div>

        {/**phone */}
        {/* <div className="xl:w-1/3 md:w-1/2 w-full px-4">
          <div className="py-16 rounded-xl border border-gray-50 shadow-outline shadow-gray-200 flex flex-col items-center justify-center space-y-8">
            <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-outline shadow-gray-200 hover:shadow-purple-400 hover:-translate-y-1 transform transition text-purple-600">
              <MdPhone size={32} />
            </div>
            <p className="text-xl font-semibold">Phone Number</p>
            <p className="text-sm">info@thetkbrown.com</p>
          </div>
        </div> */}
      </div>

      <div className="py-24 xl:px-32 md:px-16 px-8">
        <div className="py-8 rounded-xl border border-gray-50 shadow-outline shadow-gray-200">
          <div className="px-8 py-4">
            <p className="text-xl font-semibold">Say Hello To Us!</p>
          </div>

          <form action="">
            <div className="py-4">
              <div className="flex flex-wrap">
                <div className="lg:w-1/3 sm:w-1/2 w-full px-4 lg:mb-0 mb-4">
                  <input
                    type="text"
                    name=""
                    placeholder="Full Name"
                    className="w-full bg-purple-50 py-3 px-6 rounded-full border-none text-black text-sm outline-none focus-within:ring-2 focus-within:ring-purple-400 placeholder:text-gray-400"
                  />
                </div>
                <div className="lg:w-1/3 sm:w-1/2 w-full px-4 sm:mb-0 mb-4">
                  <input
                    type="text"
                    name=""
                    placeholder="Email"
                    className="w-full bg-purple-50 py-3 px-6 rounded-full border-none text-black text-sm outline-none focus-within:ring-2 focus-within:ring-purple-400 placeholder:text-gray-400"
                  />
                </div>
                <div className="lg:w-1/3 sm:w-1/2 w-full px-4">
                  <input
                    type="text"
                    name=""
                    placeholder="Phone Number"
                    className="w-full bg-purple-50 py-3 px-6 rounded-full border-none text-black text-sm outline-none focus-within:ring-2 focus-within:ring-purple-400 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="py-4 px-4">
              <textarea
                name=""
                placeholder="Your Message"
                rows="6"
                className="w-full py-3 px-6 rounded-lg bg-purple-50 border-none text-black text-sm outline-none focus-within:ring-2 focus-within:ring-purple-400 placeholder:text-gray-400"
              ></textarea>
            </div>

            <div className="py-4 px-8">
              <button className="py-3 px-9 text-white bg-purple-600 rounded-full">
                SUBMIT REQUEST
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
