import '../styles/globals.css';
import { AppProvider } from '../context/AppContext';
import Layout1 from '../components/layout/layout1';
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
