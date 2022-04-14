import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { FiMenu } from "react-icons/fi"
import afaSports from "../public/AFA SPORTS.png"
import arise from "../public/Arise LOGO.jpg"
import bam from "../public/Biola Alabi Media.jpg"
import delta from "../public/Delta logo.jpg"
import gtb from "../public/Guaranty_Trust_Bank.jpg"
import hwell from "../public/Honeywell.jpeg"
import hype from "../public/Hype.png"
import ilare from "../public/Ilare.png"
import Modal from "../components/Modal"

export default function Home() {
  const [openModal, setOpenModal] = useState(false)

  const clients = [
    { name: "AFA SPORTS", image: afaSports },
    { name: "Arise", image: arise },
    { name: "Biola Alabi Media", image: bam },
    { name: "Delta", image: delta },
    { name: "GTB", image: gtb },
    { name: "Honeywell", image: hwell },
    { name: "Hype", image: hype },
    { name: "Ilare", image: ilare },
  ]

  return (
    <div className="font-hind relative">
      <Head>
        <title>Home | TK Brown</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {openModal && <Modal setOpenModal={setOpenModal} />}

      <header className="py-10 px-10 bg-[url(../public/swirl_t1.png)] bg-cover bg-center">
        {/**nav bar */}
        <div className="flex items-center justify-between">
          <Link href="/">
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

        <div className="px-6 py-10 text-center w-3/5 mx-auto">
          <p className="text-4.5xl leading-normal font-playfair">
            <strong>Brand Strategy & Communications</strong> agency offering
            customised services allowing brands to focus on the core of the
            business.
          </p>
        </div>
      </header>

      <main>
        <span className="flex justify-center font-semibold text-3xl mt-10 mb-32">
          Our Clients
        </span>

        <div className="flex flex-wrap">
          {clients.map((client, index) => (
            <div key={index} className="w-1/4 p-8 border-y border-gray-200">
              <div className="relative flex w-full pb-[100%] justify-center items-center">
                <Image
                  src={client.image}
                  alt={client.name}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  )
}
