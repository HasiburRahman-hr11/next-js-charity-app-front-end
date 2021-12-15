import '../styles/globals.css';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
