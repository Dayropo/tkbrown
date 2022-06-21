import Layout from "../components/Layout"
import "../styles/globals.css"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/**Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-YX0FVV9D1L"
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "G-YX0FVV9D1L", {
          page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
