import Layout from "../components/Layout"
import "../styles/globals.css"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {/**Global site tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
