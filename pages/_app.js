import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import initializeFirebase from '../firebase/firebase.init';

// initializeFirebase();

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </Provider>
    )
  }

  return (
    <Provider store={store}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <ToastContainer />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default MyApp
