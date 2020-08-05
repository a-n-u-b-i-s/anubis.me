import App from 'next/app'
import Providers from '../components/Providers'
import { config } from '@fortawesome/fontawesome-free'
import '@fortawesome/fontawesome-free/styles.css'
config.autoAddCss = false

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
