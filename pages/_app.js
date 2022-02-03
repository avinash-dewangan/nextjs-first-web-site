import Footer from '../componets/Footer';
import Header from '../componets/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
