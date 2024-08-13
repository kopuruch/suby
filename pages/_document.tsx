import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";


const Document = () => {
  return (
    <Html lang='uk'>
      <Head>
        {/* <!-- Google Tag Manager --> */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WRFR2G7F');`
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        <link id="favicon" rel="shortcut icon" type="image/ico" href="/static/assets/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/assets/favicon-32x32.png" />

        <meta name="facebook-domain-verification" content="tx1rn7bppfgqew2p724cp0hjqbqrj7" />
      </Head>
      <body>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WRFR2G7F"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }}
      />
      {/* <!-- End Google Tag Manager (noscript) --> */}

      <div id="modal-root"></div>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}

export default Document;
