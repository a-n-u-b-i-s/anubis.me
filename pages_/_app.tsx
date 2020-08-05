import App from 'next/app'
import Providers from '../components/Providers'

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
