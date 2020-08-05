import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Head from 'next/head'

export default class ScreenDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <App {...props}>
                <Head>
                  <link rel="icon" href="favicon.ico" />
                  <link
                    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;400;700;900&display=swap"
                    rel="stylesheet" />
                </Head>
              </App>
            )
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
