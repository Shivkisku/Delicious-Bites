import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Delicious Bites</title> {/* Replace with your actual website name */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
