import '@/styles/globals.css'
import '../styles/bootstrap.min.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function App({ Component, pageProps }) {
  return(
  <>
  <Component {...pageProps} />
  </>
  ) 

}
