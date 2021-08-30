import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { makeServer } from '../services/mirage';

export default function MyApp ({Component, pageProps} : AppProps){

  const queryClient = new QueryClient();

  if (process.env.NODE_ENV === 'development'){
    makeServer();
  }

  return (

    <QueryClientProvider client={queryClient} >
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
      <Component {...pageProps}/>
      </SidebarDrawerProvider>
    </ChakraProvider>
    </QueryClientProvider>
  )
}