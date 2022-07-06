import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import notFound from "../public/404.png"

const PageNotFound = () => {
  return (
    <div className="relative">
      <Head>
        <title>404 | TKBrown</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
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
        <div className="px-8 py-40 flex flex-col space-y-8 items-center justify-center">
          <div className="flex h-80 w-80 items-center justify-center relative">
            <Image src={notFound} alt="404" objectFit="contain" />
          </div>
          <Link href="/" passHref>
            <button className="py-3 px-9 bg-purple-600 hover:bg-purple-500 text-white rounded-full">
              GO HOME
            </button>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default PageNotFound
