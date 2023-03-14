import '../global/styles/globals'
import { GlobalStyle } from '../global/styles/globals'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
