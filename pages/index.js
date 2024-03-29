import { useState } from "react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { FcAdvertising, FcStatistics, FcPositiveDynamic } from "react-icons/fc"
import {
  MdOutlinePermMedia,
  MdDevices,
  MdDashboardCustomize,
} from "react-icons/md"
import { FiChevronDown } from "react-icons/fi"
import mission from "../public/mission.webp"
import target from "../public/target.png"

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>The TKBrown Co. | Home</title>
        <meta
          name="description"
          content="A branding and media agency providing customised solutions that
              help brands to lead and succeed in their marketing transformation
              goals."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo_transparent_background_small.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo_transparent_background_small.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo_transparent_background_small.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      <header className="bg-purple-900 h-screen relative">
        {/**jumbo */}
        <div className="px-8 py-40 h-full font-bold text-white text-center flex items-center justify-center">
          <div>
            <p className="xl:text-3.5xl md:text-2.25xl sm:text-2xl text-xl xl:leading-5xl md:leading-3.125xl">
              A branding and media agency providing customised solutions that
              help brands to lead and succeed in their marketing transformation
              goals.
            </p>
          </div>
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
            className="cursor-pointer hover:-translate-y-1/4 transform transition"
          />
        </div>
      </header>

      {/**our services */}
      <div className="py-24 xl:px-32 md:px-16 px-8">
        <p className="text-3xl font-semibold">Our Services</p>
        <p className="text-sm text-blue-600 font-semibold">WHAT WE OFFER?</p>

        <div className="flex flex-wrap justify-between mt-16">
          {/**digital media strategy */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 lg:mb-0 mb-16">
            <div className="min-h-[400px] py-8 px-8 rounded-2xl border border-gray-50 shadow-outline shadow-gray-200 relative">
              <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-outline shadow-gray-200 hover:shadow-purple-400 hover:-translate-y-1 transform transition">
                <FcPositiveDynamic size={36} />
              </div>
              <div className="mt-10 space-y-5">
                <p className="font-semibold text-lg">Media Strategy</p>
                <p className="text-base">
                  Through a unique combination of media expertise, we create and
                  optimise media experiences that connect people to brands and
                  offer the best strategy for growth and expansion.
                </p>
              </div>
              <Link href="/services" passHref>
                <button className="absolute w-2/3 py-3 px-9 rounded-full text-white xl:text-sm text-xs bg-purple-600 -bottom-6 left-0 right-0 mx-auto hover:bg-purple-500">
                  Continue Reading
                </button>
              </Link>
            </div>
          </div>

          {/**content marketing */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4 md:mb-0 mb-16">
            <div className="min-h-[400px] py-8 px-8 rounded-2xl border border-gray-50 shadow-outline shadow-gray-200 relative">
              <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-outline shadow-gray-200 hover:shadow-purple-400 hover:-translate-y-1 transform transition">
                <FcStatistics size={36} />
              </div>
              <div className="mt-10 space-y-5">
                <p className="font-semibold text-lg">Content Marketing</p>
                <p className="text-base">
                  We have the expertise to rapidly scale your business, build a
                  stronger online reputation & brand awareness.
                </p>
              </div>
              <Link href="/services" passHref>
                <button className="absolute w-2/3 py-3 px-9 rounded-full text-white xl:text-sm text-xs bg-purple-600 -bottom-6 left-0 right-0 mx-auto hover:bg-purple-500">
                  Continue Reading
                </button>
              </Link>
            </div>
          </div>

          {/**digital media sales */}
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <div className="min-h-[400px] py-8 px-8 rounded-2xl border border-gray-50 shadow-outline shadow-gray-200 relative">
              <div className="w-20 h-20 flex items-center justify-center rounded-full shadow-outline shadow-gray-200 hover:shadow-purple-400 hover:-translate-y-1 transform transition">
                <FcAdvertising size={36} />
              </div>
              <div className="mt-10 space-y-5">
                <p className="font-semibold text-lg">Advertising Technology</p>
                <p className="text-base">
                  We provide the right ad-tech operations and solutions helping
                  publishers to focus on what&apos;s important, opening the door
                  to a world full of new buyers and increasing daily ad revenue.
                </p>
              </div>
              <Link href="/services" passHref>
                <button className="absolute w-2/3 py-3 px-9 rounded-full text-white xl:text-sm text-xs bg-purple-600 -bottom-6 left-0 right-0 mx-auto hover:bg-purple-500">
                  Continue Reading
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/** our mission */}
      <div className="py-24 xl:px-32 md:px-16 px-8 flex">
        <div className="md:w-1/2 w-full px-4">
          <p className="text-3xl font-semibold">Our Mission</p>
          <div className="flex justify-between mt-16">
            <p>
              Our mission is to provide measurable value by helping brands and
              business owners increase sales, online engagement, and emotional
              connection to their target audience. We are a set of intelligent
              individuals, who have diverse backgrounds and skillsets committed
              to growing an energetic online marketing experience in a
              productive environment.
            </p>
          </div>
        </div>

        <div className="w-1/2 px-4 relative md:flex hidden justify-center items-center">
          <Image
            src={mission}
            alt="Our Mission"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>

      {/**targeting */}
      <div className="py-24 xl:px-32 md:px-16 px-8 bg-targeting bg-cover bg-center text-white flex">
        <div className="md:w-1/2 w-full px-4">
          <p className="text-3xl font-semibold">Targeting</p>
          <div className="mt-16 space-y-8">
            {/**multi format */}
            <div className="flex lg:space-x-6">
              <div className="w-16 h-16 bg-white text-black rounded-full lg:flex hidden items-center justify-center">
                <MdOutlinePermMedia size={24} />
              </div>
              <div className="w-96">
                <p className="text-lg font-semibold">Multi-Format Targeting</p>
                <p className="mt-2.5 text-sm">
                  We are also able to reach your audience via multiple formats
                  (GIF, Rich Media, Banners, Video)
                </p>
              </div>
            </div>

            {/**multi device */}
            <div className="flex lg:space-x-6">
              <div className="w-16 h-16 bg-white text-black rounded-full lg:flex hidden items-center justify-center">
                <MdDevices size={24} />
              </div>
              <div className="w-96">
                <p className="text-lg font-semibold">Multi-Device Targeting</p>
                <p className="mt-2.5 text-sm">
                  Multi-Device Targeting - We are able to reach your audience
                  across multiple devices (Desktop, Mobile and Tablets)
                </p>
              </div>
            </div>

            {/**custom */}
            <div className="flex lg:space-x-6">
              <div className="w-16 h-16 bg-white text-black rounded-full lg:flex hidden items-center justify-center">
                <MdDashboardCustomize size={24} />
              </div>
              <div className="w-96">
                <p className="text-lg font-semibold">Custom Targeting</p>
                <p className="mt-2.5 text-sm">
                  We explore advanced targeting to the ideal audience to
                  optimize performance. (Demographic, Geographical, Behavioural)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 px-4 relative md:flex hidden justify-center items-center">
          <Image
            src={target}
            alt="Targeting"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
    </div>
  )
}
