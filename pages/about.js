import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { FiChevronDown } from "react-icons/fi"
import aboutUs from "../public/about-us.webp"
import values from "../public/values.webp"

const About = () => {
  return (
    <div>
      <Head>
        <title>About | TKBrown</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header className="relative h-screen bg-purple-900">
        {/**jumbo */}
        <div className="px-8 py-40 h-full font-bold text-white text-center flex items-center justify-center font-oswald">
          <span className="xl:text-9xl md:text-7xl text-3xl font-semibold">
            ABOUT US
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

      {/**about us */}
      <div className="py-24 xl:px-32 md:px-16 px-8 flex">
        <div className="md:w-1/2 w-full px-4">
          <p className="text-3xl font-semibold">About Us</p>
          <div className="w-full mt-16">
            <p>
              The TKBrown Company is a branding and media agency providing
              customised solutions. We offer a diverse and comprehensive range
              of marketing solution to drive bottom-line results for our
              clients. <br />
              We provide world-class solutions and services, unlocking new
              opportunities and potentials for growth and business
              transformation.
            </p>
          </div>

          <Link href="/services" passHref>
            <button className="bg-purple-600 text-white py-3 px-9 rounded-full mt-8 hover:bg-purple-500">
              All Our services
            </button>
          </Link>
        </div>

        <div className="w-1/2 px-4 md:flex hidden justify-center items-center relative">
          <Image
            src={aboutUs}
            alt="About Us"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>

      {/**core values */}
      <div className="py-24 xl:px-32 md:px-16 px-8 bg-values flex">
        <div className="w-1/2 px-4 md:flex hidden justify-center items-center relative">
          <Image
            src={values}
            alt="Core Values"
            objectFit="contain"
            layout="fill"
          />
        </div>

        <div className="md:w-1/2 w-full px-4">
          <p className="text-3xl font-semibold">Our Core Values</p>
          <div className="mt-16 space-y-6 w-full">
            {/**respect */}
            <div className="flex">
              <div className="w-2/12 xl:block hidden px-2">
                <div className="w-16 h-16 rounded-full md:flex hidden items-center justify-center bg-white border-2 border-purple-700"></div>
              </div>
              <div className="xl:w-10/12 w-full">
                <p className="text-lg font-semibold">
                  Respect & Commitment for our Clients
                </p>
                <p className="mt-4">
                  We show unrivaled commitment to our work and clients alike.
                </p>
              </div>
            </div>

            {/**sustainability */}
            <div className="flex">
              <div className="w-2/12 xl:block hidden px-2">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-2 border-purple-700"></div>
              </div>
              <div className="xl:w-10/12 w-full">
                <p className="text-lg font-semibold">Sustainability</p>
                <p className="mt-4">
                  We are focused on building sustainable models, solutions and
                  businesses
                </p>
              </div>
            </div>

            {/**innovation */}
            <div className="flex">
              <div className="w-2/12 xl:block hidden px-2">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-2 border-purple-700"></div>
              </div>
              <div className="xl:w-10/12 w-full">
                <p className="text-lg font-semibold">Innovation</p>
                <p className="mt-4">
                  We provide targeted solutions that adds value to our clients.
                  We are all about improving old methods in a new and more
                  efficient way.
                </p>
              </div>
            </div>

            {/**excellence */}
            <div className="flex">
              <div className="w-2/12 xl:block hidden px-2">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-2 border-purple-700"></div>
              </div>
              <div className="xl:w-10/12 w-full">
                <p className="text-lg font-semibold">Excellence</p>
                <p className="mt-4">
                  We have a custom to indulge and execute to the best of our
                  ability.We promote excellence in all we do.We have a custom to
                  indulge and execute to the best of our ability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
