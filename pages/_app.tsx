import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import Header from '../components/Header';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;

