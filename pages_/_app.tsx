import App from 'next/app'
import Providers from '../components/Providers'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

export default class ScreenApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Providers>
        <Component {...pageProps} />
      </Providers>
    )
  }
}
