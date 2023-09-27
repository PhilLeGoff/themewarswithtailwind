import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <title>THEMEWARS</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
