import '@/styles/globals.css'
import '../styles/bootstrap.min.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

// import 'bootstrap-icons/font/bootstrap-icons.css';

export default function App({ Component, pageProps }) {
  return(
  <>
  <Component {...pageProps} />
  </>
  ) 

}
