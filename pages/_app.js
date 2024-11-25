import '../styles/index.css'
import { ApolloProvider } from '@apollo/client/react'
import {client} from '../lib/apollo'
import Cursor from '../components/Cursor';


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps}/>
    <Cursor/>
    </ApolloProvider>
  );
}

export default MyApp