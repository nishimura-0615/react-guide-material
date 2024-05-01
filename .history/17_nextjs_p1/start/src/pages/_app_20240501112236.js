import '../styles/globals.css';
import { AppProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
