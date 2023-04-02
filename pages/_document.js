import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html id="html" lang="en">
        <Head/>
      <body className="bg-background theme-ukraine:bg-background-ukraine transition duration-300 ease-in-out">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
