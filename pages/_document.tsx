import Document, { Html, Head, Main, NextScript } from '../node_modules/next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
            <meta name="description" content="Una App para listar y conocer diferentes podcast de la red"/>
            <meta name="robots" content="index,follow"/>
            <link rel="icon" type="image/png" href="/images/nota-musical.png"/>
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument