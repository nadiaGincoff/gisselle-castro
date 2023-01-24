import Head from 'next/head';
import { useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react' 
import React from 'react';

// components
import {
  Stack,
} from '@chakra-ui/react';

import DesktopMenu from './DesktopMenu'
import ToggleMenu from './ToggleMenu'
import Footer from './Footer'

function Layout({ children }: {
  children: React.ReactNode;
}): JSX.Element {
  const [isLessThanTablet, setLessThanTablet] = useState(false)
  const [lessThanTablet] = useMediaQuery(['(max-width: 810px)']);

  useEffect(() => {
    if (lessThanTablet) {
      setLessThanTablet(true)
    }
  }, [lessThanTablet])

  return (
    <Stack paddingX={[0, 0, 0]}>
      <Head>
        <title>Gisele Escudero</title>
        <meta name="description" content="All about Rick and Morty series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack height="100vh" justifyContent="space-between">
        {isLessThanTablet ? <ToggleMenu /> : <DesktopMenu />}
        <Stack as="section" alignItems="center">
          {children} 
        </Stack>
        <Footer /> 
      </Stack>
    </Stack>
  );
}

export default React.memo(Layout);
